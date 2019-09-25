import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _error: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  get error(): Observable<string> {
    return this._error.asObservable().pipe(
      filter(_error => _error !== null)
    );
  }

  errorHandler = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    this._error.next(errorMessage);
    return throwError(errorMessage);
  }

}
