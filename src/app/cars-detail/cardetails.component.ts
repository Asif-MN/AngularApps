import { Component, OnChanges, Input, SimpleChanges } from "@angular/core";
import { CarDetail } from "./app/models/cardetails.model";

@Component({
  selector: "cardetails-root",
  templateUrl: "./cardetails.component.html",
  styleUrls: ["./cardetails.component.css"]
})

export class CarDetailsComponent implements  OnChanges  {
  @Input() input_carid: number = 0; 
  cardetail: CarDetail = {
    carid:0,
    engine:"",
    mileage:"",
    maxpower:"",
    fuel:"",
    transmission:"",
    length:0,
    width:0,
    height:0
  };
  cardetails: CarDetail[] = [
                  {
                    id: 1,
                    carid: 1,
                    engine:"1991/1950 cc",
                    mileage:"11.3-18 kmpl",
                    maxpower:"194/192 bhp",
                    fuel:"Petrol/Diesel",                    
                    transmission: "Automatic",
                    length:4658,
                    width:1890,
                    height: 1644        
                  },
                  {
                    id: 2,
                    carid: 2,
                    engine:"2995/3996 cc",
                    mileage:"8.8-10.8 kmpl",
                    maxpower:"335/542 bhp",
                    fuel:"Petrol",                    
                    transmission: "Automatic",
                    length:4931,
                    width:2194,
                    height: 1676        
                  },
                  {
                    id: 3,
                    carid: 3,
                    engine:"1984 cc",
                    mileage:"14.1 kmpl",
                    maxpower:"241 bhp",
                    fuel:"Petrol",                    
                    transmission: "Automatic",
                    length:4633,
                    width:2086,
                    height: 1455        
                  },
                  {
                    id: 4,
                    carid: 4,
                    engine:"1995/1998 cc",
                    mileage:"16.1-19.6 kmpl",
                    maxpower:"188/255 bhp",
                    fuel:"Petrol/Diesel",                    
                    transmission: "Automatic",
                    length:4633,
                    width:1811,
                    height: 1429        
                  }
                ];

  ngOnChanges(changes: SimpleChanges) {

    if(changes.input_carid.currentValue !== "undefined"){
      var cardtl = this.cardetails.filter(c=>c.id=== this.input_carid);      
      if(cardtl.length!==0){
        this.cardetail = cardtl[0];
      }
    }
  }
                
}
