import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MakerComponent } from './maker/maker.component';
import { ModelsComponent } from './models/models.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MakerComponent,
    ModelsComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
