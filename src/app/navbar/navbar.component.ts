import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { CarInfoService } from '../car-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private database : DatabaseService,
    private carserv : CarInfoService
    ) { }
  public username = "huh";
  public headings;
  public shouldShowMenu = false

   ngOnInit(){
     if(this.isLoggedIn()){
    this.database.getUserName().then( (res : string) =>{
      console.log(res);
      this.username = res;
    });

    this.getHeadings();
  }
    //  this.database.databaseResponder.subscribe(res =>{
    //    this.username = res.toString();
    //  });
  }

  public isLoggedIn(){
    return this.database.getLoginStatus();
  }

  public logout(){
    this.database.Logout();
  }

  public getHeadings (){
    this.carserv.carheadingObservable.subscribe((res)=>{
      this.headings = res;
      console.log(res);
    })
  }

  public toggleShowMenu(){
    this.shouldShowMenu = !this.shouldShowMenu;
  }


}
