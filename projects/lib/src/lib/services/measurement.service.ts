import { Injectable, Inject } from '@angular/core';
import { RestAPIUtil } from '../utils';
import { MeasurementModel } from '../models';
import { ConfigInterface, MeasurementInterface } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { map, catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService extends RestAPIUtil<MeasurementModel> {

  constructor(
    @Inject('config') config: ConfigInterface,
    httpClient: HttpClient,
    commonService: CommonService
  ) {
    super(httpClient, commonService);
    this.api = config.restUrl + '/v2/measurements';
  }

  toModel(input: MeasurementInterface): MeasurementModel {
    return new MeasurementModel(input);
  }

  findCurrentByCounterId(counterId: number) {
    return this.httpClient.get<MeasurementInterface>(`${this.api}/counter/${counterId}/current`)
    .pipe(
      filter(_value => _value !== null),
      map(_value => new MeasurementModel(_value)),
      catchError(this.commonService.errorHandler)
    );
  }
}
