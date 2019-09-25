import { Injectable, Inject } from '@angular/core';
import { ConfigInterface, AlarmInterface } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { RestAPIUtil } from '../utils';
import { AlarmModel } from '../models';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlarmService extends RestAPIUtil<AlarmModel> {

  constructor(
    @Inject('config') config: ConfigInterface,
    httpClient: HttpClient,
    commonService: CommonService
  ) {
    super(httpClient, commonService);
    this.api = config.restUrl + '/v2/alarms';
  }

  toModel(input: AlarmInterface): AlarmModel {
    return new AlarmModel(input);
  }

  findActiveByAlarmObjParentId(parentId: number) {
    return this.httpClient.get<AlarmInterface[]>(`${this.api}/parent/${parentId}`)
    .pipe(
      map(this.toArrayModel),
      catchError(this.commonService.errorHandler)
    );
  }

}
