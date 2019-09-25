import { Injectable, Inject } from '@angular/core';
import { RestAPIUtil } from '../utils';
import { CounterModel } from '../models';
import { ConfigInterface, CounterInterface } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { catchError, map } from 'rxjs/operators';
import { EquipmentEnum, PerformanceEnum } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends RestAPIUtil<CounterModel> {

  constructor(
    @Inject('config') config: ConfigInterface,
    httpClient: HttpClient,
    commonService: CommonService
  ) {
    super(httpClient, commonService);
    this.api = config.restUrl + '/v2/counters';
  }

  toModel(input: CounterInterface): CounterModel {
    return new CounterModel(input);
  }

  findByParentIdAndEquipmentAndPerf(parentId: number, eqType: EquipmentEnum, perf: PerformanceEnum) {
    return this.httpClient.get<CounterInterface[]>(`${this.api}/parent/${parentId}/equipment/${eqType}/performance/${perf}`)
      .pipe(
        map(this.toArrayModel),
        catchError(this.commonService.errorHandler)
      );
  }

}
