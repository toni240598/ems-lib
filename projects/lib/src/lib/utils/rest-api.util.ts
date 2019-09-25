import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

export class RestAPIUtil<T> {
  constructor(public httpClient: HttpClient, public commonService: CommonService) {
  }

  private _api: string;

  public get api(): string {
    return this._api;
  }

  public set api(value: string) {
    this._api = value;
  }


  toModel(value: any): T {
    return null;
  }

  toArrayModel = (input: any): Array<T> => {
    return input.map(_set => this.toModel(_set));
  }


}
