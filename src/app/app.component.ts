import { Component } from '@angular/core';
import { CarsInfoService } from './service/cars-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsInfoService]
})
export class AppComponent {
  title = 'Automobiles';
  makers = ['FORD','ACURA'];
  models = {
    'FORD' : ['Edge','Escape'],
    'ACURA' : ['ILX','MDX']
  };
  selectedMaker;
  selectedModels;
  selectedCar;
  cars ;
  error;

  constructor(private carsInfoService: CarsInfoService) {}

  onMakersSelected(maker):void {
    this.selectedMaker = maker;
    this.selectedModels = this.models[maker];
  }

  onModelSelected(model): void {
    this.carsInfoService.getInfo()
      .then(response => response.forEach(car => {
            if(car.model === model && car.make === this.selectedMaker) {
              this.selectedCar = car;
            }
      },this))
      .catch(error => this.error = error);


  }

}
