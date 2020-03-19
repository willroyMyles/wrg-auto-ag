import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { CarInfoService } from '../car-info.service';
import { SwalService } from '../swal.service';
import { templateJitUrl } from '@angular/compiler';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private database : DatabaseService,
    private carserv : CarInfoService,
    private swal : SwalService,
    private http :HttpClient,
    private holder : HolderService
    ) { }


  public username = "";
  public headings;
  public shouldShowMenu = false;
  public breadcrumb;

  private loginurl = "../app/login/login.component.html"

   ngOnInit(){


    this.holder.breadCrumbObservable.subscribe( res =>{
      this.breadcrumb = res;
    })

     if(this.isLoggedIn()){
      this.database.databaseResponder.subscribe( res =>{
      this.username = res;
    })

    this.database.getUserName();

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

  public login(){

    this.http.get(this.loginurl, {responseType : 'text'}).subscribe( data =>{

      this.swal.displayProfileOptions(data);
    })

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
