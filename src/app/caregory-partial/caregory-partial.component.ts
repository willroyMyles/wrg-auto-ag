import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-caregory-partial',
  templateUrl: './caregory-partial.component.html',
  styleUrls: ['./caregory-partial.component.css']
})
export class CaregoryPartialComponent implements OnInit {



  constructor(private fg : FormBuilder) { }
  ngOnInit(): void {
  }

  public formgroup = this.fg.group({
    select : [0]
  });



}
