import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from "./app.component";
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './cars-detail/cardetails.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, CarDetailsComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
