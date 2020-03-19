import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolderService {

  public item;
  public breadCrumb = '';

  public breadCrumbObservable = new BehaviorSubject<string>('');

  constructor() { }

  public storeItem(incoming){
    this.item = incoming
  }

  public getItem(){
    return this.item;
  }

  public setBreadcrub(text){
    this.breadCrumb += ' . ' + text
    this.breadCrumbObservable.next(this.breadCrumb);
  }

  public getBreadCrumb(){
    return this.breadCrumb;
  }
}
