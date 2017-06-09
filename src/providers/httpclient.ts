import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URL } from '../app/app.config';

/*
  Generated class for the Httpclient provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Httpclient {

  constructor(public http: Http) {
    console.log('Hello Httpclient Provider');
  }

  getForm(): Observable<any> {
    let contentType = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET"
    });
    let options = new RequestOptions(contentType);
    return this.http.get(URL, options).map(response => {
      return response;
    }).catch(err => {
      return Observable.throw("error al consumir el servicio");
    });
  }

}
