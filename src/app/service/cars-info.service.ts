import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Car } from '../data/car';

@Injectable()
export class CarsInfoService {
  private url = 'http://localhost:8080/api/cars';

  constructor(private http: Http) { }

  getInfo(): Promise<Car[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json() as Car[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

}
