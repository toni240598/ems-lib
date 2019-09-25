import { CounterModel } from './counter.model';
import { CounterInterface, MeasurementInterface } from '../interfaces';
import { DatePipe } from '@angular/common';

export class MeasurementModel {
  constructor(input?: MeasurementInterface) {
    if (input) {
      this.id = input.id;
      this.measurementTime = input.measurementTime;
      this.measurementValue = input.measurementValue;
      this.counter = input.counter ? new CounterModel(input.counter) : null;
    }
  }

  private _id: number;
  private _counter: CounterModel;
  private _measurementTime: string;
  private _measurementValue: number;

  public get id(): number {
    return this._id;
  }

  public get counter(): CounterModel {
    return this._counter;
  }

  public get measurementTime(): string {
    return this._measurementTime;
  }

  public get measurementValue(): number {
    return this._measurementValue;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set counter(value: CounterModel) {
    this._counter = value;
  }

  public set measurementTime(value: string) {
    this._measurementTime = value;
  }

  public set measurementValue(value: number) {
    this._measurementValue = value;
  }

  public get getTime(): Date {
    return this.measurementTime ? new Date(this.measurementTime) : null;
  }

  public set setTime(value: Date) {
    this.measurementTime = value ? new DatePipe('id').transform(value, 'yyyy-MM-ddTHH:mm:ss\'Z\'', '+0000') : null;
  }

}
