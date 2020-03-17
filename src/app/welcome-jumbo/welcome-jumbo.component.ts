import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome-jumbo',
  templateUrl: './welcome-jumbo.component.html',
  styleUrls: ['../app.component.css']
})
export class WelcomeJumboComponent implements OnInit {
  public isLoggedIn = true;
  constructor(private loginService : LoginService
    ) { }

  ngOnInit(): void {
    //this.isLoggedIn = this.loginService.isLoggedIn;
  }

}
