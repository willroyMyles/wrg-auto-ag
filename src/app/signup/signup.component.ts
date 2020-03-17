import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Users, UserObject } from '../users';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private formBuilder : FormBuilder,
     private db : DatabaseService
    ) { }

  // public registrationFormGroup = new FormGroup({
  //   username : new FormControl(''),
  //   email : new FormControl(''),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  // });

  public registrationFormGroup = this.formBuilder.group({
    username : ["", [Validators.required, Validators.minLength(4)]],
    email : ["", [Validators.required]],
    password : ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword : ["", [Validators.required, Validators.minLength(6), this.passwordValidator]]
  }, {validator : this.passwordValidator});

  public username(){
    return this.registrationFormGroup.get('username');
  }
  public password(){
    return this.registrationFormGroup.get('password');
  }
  public email(){
    return this.registrationFormGroup.get('email');
  }
  public confirmPassword(){
    return this.registrationFormGroup.get('confirmPassword');
  }

  public passwordValidator( control : AbstractControl){
    const pass = control.get("password");
    const conpass = control.get("confirmPassword");
    return pass && conpass && conpass.value != pass.value ? {'mismatch' : true} : null;
  }

  public onSubmit(){
    console.log(this.email().value)
    var user = new UserObject;
    user.email = this.email().value;
    user.password = this.password().value;
    user.userName = this.username().value;
    //this.db.addToDataBase(user);
     this.db.registerWithEmailAndPassword(user);
    //this.db.Login();

  }

  ngOnInit(): void {

  }



}
