import { Component } from "@angular/core";
import { Car } from "./app/models/cars.model";

@Component({
  selector: "cars-root",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})

export class CarsComponent {
  carid: number;  
  showmodal: boolean = false;
  cars: Car[] = [{
                    id: 1,
                    name: "Mercedes-Benz GLC",
                    url: "https://auto.ndtvimg.com/car-images/medium/mercedes-benz/glc/mercedes-benz-glc.webp?v=12"        
                  },
                  {
                    id: 2,
                    name: "Porsche Cayenne Coupe",
                    url: "https://auto.ndtvimg.com/car-images/medium/porsche/cayenne-coupe/porsche-cayenne-coupe.webp?v=11"        
                  },
                  {
                    id: 3,
                    name: "Audi A6",
                    url: "https://auto.ndtvimg.com/car-images/medium/audi/a6/audi-a6.webp?v=17"        
                  },
                  {
                    id: 4,
                    name: "BMW 3 Series",
                    url: "https://auto.ndtvimg.com/car-images/medium/bmw/3-series/bmw-3-series.webp?v=10"        
                  }];

  getCarDetails(value)
  {
    this.carid = value;
    this.showmodal = true;
  }
  hide()
  {
    this.showmodal = false;
  }

}
