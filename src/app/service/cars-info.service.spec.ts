import {HttpModule,Http,Response,ResponseOptions,XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';import { TestBed, inject } from '@angular/core/testing';

import { CarsInfoService } from './cars-info.service';

describe('CarsInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        CarsInfoService
      ]
    });
  });

  it('should return an Observable<Array<>>', inject([CarsInfoService], (service: CarsInfoService) => {
    inject([CarsInfoService,MockBackend],(service,mockBackend) => {
      const mockResponse = [{
        make: 'FORD',
        model: 'Edge',
        description: "Ford's flagship SUV is comfortable, practical and well equipped but a little more excitement wouldn't go amiss",
        image: "src/assets/dsc_3485.jpg"
      }];

      mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getInfo().subscribe((cars) => {
          expect(cars.length).toBe(1);
          expect(cars[0].make).toEqual('FORD');
          expect(cars[0].model).toEqual('Edge');

        });

    })

  }));
});
