import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CarMakeAndModel} from './car-make-and-model';
import { Observable } from 'rxjs';
import {Papa} from 'ngx-papaparse'

@Injectable({
  providedIn: 'root'
})
export class CarInfoService {
  private carString = "assets/data/cars.txt";
  private carPartsString = "assets/data/parts.txt";

  private carPartsHeading = [];
  private cartPartsBody = [];

  constructor(private http : HttpClient, private papaparse : Papa) {
    this.getCarParts();
  }


  public getPartsHeaders() : Array<String> {
    return this.carPartsHeading;
  }

  public getBodyParts() : Array<Array<String>> {
    return this.cartPartsBody;
  }

  public getCarInfo(): Observable<CarMakeAndModel>{
    var cars = this.http.get<CarMakeAndModel>(this.carString);
    return cars;
  }

  public getCarParts(){

    var parts;
    this.http.get(this.carPartsString, {responseType : 'text'}).subscribe(data => {
      this.papaparse.parse(data, {
        complete : (results) =>{
          for( var i = 0; i < results.data.length - 1; i++){
            this.carPartsHeading.push(results.data[i][0]);
            var tempArr = new Array;
            for( var j = 1; j < results.data[i].length; j++){
              tempArr.push(results.data[i][j]);
            }
            this.cartPartsBody.push(tempArr);
          }

        }
      });
    } )


  }
}
