import { Injectable, Inject } from '@angular/core';
import { ConfigInterface } from '../interfaces/config.interface';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { RestAPIUtil } from '../utils/rest-api.util';
import { ManagedObjectModel } from '../models/managed-object.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ManagedObjectInterface } from '../interfaces/managed-object.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagedObjectService extends RestAPIUtil<ManagedObjectModel> {

  constructor(
    @Inject('config') config: ConfigInterface,
    httpClient: HttpClient,
    commonService: CommonService
  ) {
    super(httpClient, commonService);
    this.api = config.restUrl + '/v2/managed_objects';
  }

  toModel(input: ManagedObjectInterface): ManagedObjectModel {
    return new ManagedObjectModel(input);
  }

  findByParentId(parentId: number): Observable<ManagedObjectModel[]> {
    return this.httpClient.get<ManagedObjectInterface[]>(`${this.api}/parent/${parentId}`)
    .pipe(
      map(this.toArrayModel),
      catchError(this.commonService.errorHandler)
    );
  }


}
