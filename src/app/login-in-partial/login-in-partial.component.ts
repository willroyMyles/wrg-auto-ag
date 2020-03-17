import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-in-partial',
  templateUrl: './login-in-partial.component.html',
  styleUrls: ['./login-in-partial.component.css']
})
export class LoginInPartialComponent implements OnInit {

  constructor( private fg : FormBuilder) { }

  public formgroup = this.fg.group({

  })

  ngOnInit(): void {
  }

}
