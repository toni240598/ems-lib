import { Injectable, Inject } from '@angular/core';
import { ConfigInterface, CommandInterface } from '../interfaces';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonService } from './common.service';
import * as io from 'socket.io-client';
import { MeasurementModel, AlarmModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(@Inject('config') config: ConfigInterface) {
    this.socket = io.connect(config.socketUrl);
    this.socket.on('perfmeasurement.data', this.addMeasurement);
    this.socket.on('alarm.data', this.pushAlarm);
  }

  private _measurement: BehaviorSubject<MeasurementModel> = new BehaviorSubject<MeasurementModel>(null);
  private _alarm: BehaviorSubject<AlarmModel> = new BehaviorSubject<AlarmModel>(null);
  socket: any;

  sendCommand(command: CommandInterface) {
    this.socket.emit('command.data', JSON.stringify(command));
  }

  get measurement(): Observable<MeasurementModel> {
    return this._measurement.asObservable().pipe(
      filter(_value => _value !== null)
    );
  }

  private addMeasurement = (_message: string) =>  {
    console.log('[socket.serrvice - measurement] => ' + _message);
    try {
     const message = JSON.parse(_message);
     this._measurement.next(new MeasurementModel(message));
    } catch (_error) {
      console.log(_error);
    }
  }

  get alarm(): Observable<AlarmModel> {
    return this._alarm.asObservable().pipe(
      filter(_value => _value !== null)
    );
  }

  pushAlarm = (_message: string) => {
    console.log('[socket.serrvice - alarm] => ' + _message);
    try {
     const message = JSON.parse(_message);
     this._alarm.next(new AlarmModel(message));
    } catch (_error) {
      console.log(_error);
    }
  }


}
