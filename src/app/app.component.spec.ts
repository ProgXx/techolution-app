import { TestBed, async, inject } from '@angular/core/testing';
import {HttpModule,Http,Response,ResponseOptions,XHRBackend} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';
import { MakerComponent } from './maker/maker.component';
import { ModelsComponent } from './models/models.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

import { CarsInfoService } from './service/cars-info.service';

describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        MakerComponent,
        ModelsComponent,
        CarDetailComponent
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        CarsInfoService
      ]
    }).compileComponents();

  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Cars'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Cars');
  }));

  it(`should have no default models selected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedModel).toEqual(undefined);
  }));

  it(`should have no default car selected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedCar).toEqual(undefined);
  }));

  it(`should have no default maker selected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.selectedMaker).toEqual(undefined);
  }));

  it(`should have 2 makers available`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.makers.length).toEqual(2);
  }));

  it(`should select maker & models after onMakersSelected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.onMakersSelected('FORD');
    expect(app.selectedMaker).toEqual('FORD');
    expect(app.selectedModels).toEqual(['Edge','Escape']);
  }));

  it(`should select car after onModelSelected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
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

        app.selectedMaker = "FORD";
        app.onModelSelected('Edge').subscribe(cars => {
          expect(app.selectedCar.make).toEqual('FORD');
          expect(app.selectedCar.model).toEqual('Edge');

        });

      });



  }));


});
