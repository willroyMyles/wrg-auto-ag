import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  public item;

  constructor() { }

  public storeItem(incoming){
    this.item = incoming
  }

  public getItem(){
    return this.item;
  }
}
