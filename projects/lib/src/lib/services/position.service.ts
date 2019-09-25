import { Injectable, Inject } from '@angular/core';
import { ConfigInterface, PositionInterface } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { RestAPIUtil } from '../utils';
import { PositionModel } from '../models';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PositionService extends RestAPIUtil<PositionModel> {

  constructor(
    @Inject('config') config: ConfigInterface,
    httpClient: HttpClient,
    commonService: CommonService
  ) {
    super(httpClient, commonService);
    this.api = config.restUrl + '/v2/positions';
  }

  toModel(input: PositionInterface): PositionModel {
    return new PositionModel(input);
  }

  findBySiteId(siteId: number) {
    return this.httpClient.get<PositionInterface[]>(`${this.api}/site/${siteId}`)
    .pipe(
      map(this.toArrayModel),
      catchError(this.commonService.errorHandler)
    );
  }

}
