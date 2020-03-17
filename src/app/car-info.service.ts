import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CarMakeAndModel} from './car-make-and-model';
import { Observable, BehaviorSubject } from 'rxjs';
import {Papa} from 'ngx-papaparse'
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CarInfoService {
  private carString = "assets/data/cars.txt";
  private carPartsString = "assets/data/parts.txt";

  public carPartsHeading = [];
  public cartPartsBody = [];

  public carsHeaders =[];
  public carsList = [];

  public testArr =new BehaviorSubject<Array<Array<String>>>([]);
  public carheadingObservable =new Observable ((oobserver)=>{
    oobserver.next(this.carPartsHeading);
  })



  constructor(private http : HttpClient, private papaparse : Papa) {
    this.parsePartsList();
    this.parseCarList();
  }

  public getCarsHeaders(){
    return this.carsHeaders;
  }

  public getCarList() : Array<Array<String>>{
    return this.carsList;
  }


  public getTitleIndex(title){
    return this.carPartsHeading.indexOf(title);
  }

  public getPartsHeaders() : Array<String> {
    return this.carPartsHeading;
  }

  public getBodyParts(){
    return this.cartPartsBody;
  }

  public getCategoryTitle(num){
    return this.carPartsHeading[num];
  }

  public getSubCategoryTitle(num1, num2){
    return this.cartPartsBody[num1][num2];
  }

  public getCarHeading(num){
    return this.carsHeaders[num]
  }

  public getCarSubHeading(num1, num2){
    return this.carsList[num1][num2];
  }

  public parseCarList(){
    this.http.get(this.carString, {responseType : "text"}).subscribe(data =>{
      this.papaparse.parse(data, {
        complete : (res) =>{

          for (let index = 0; index < res.data.length - 1; index++) {
            const element = res.data[index];
            this.carsHeaders.push(res.data[index][0]);
          }

          this.carsList = res.data;


        }
      })
    })
  }

  public parsePartsList(){

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
            this.testArr.next(this.cartPartsBody);
          }

        }
      });
    } )


  }
}
