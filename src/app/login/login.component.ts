import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    private db : DatabaseService,
    private router : Router
  ) { }

  public loginForm = this.fb.group({
    email : ["", [Validators.required]],
    password : ["", [Validators.required]]
  })

  public email(){
    return this.loginForm.get('email');
  }

  public password(){
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.db.LoginWithEmailAndPassword(this.email().value, this.password().value);
    this.router.navigate(['']);
  }

}
