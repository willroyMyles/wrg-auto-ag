import { Component, OnInit } from '@angular/core';
import { CarInfoService } from '../car-info.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public carHeaders;
  public carBody;

  constructor(private carparts : CarInfoService) { }

  ngOnInit(): void {
    this.carHeaders = this.carparts.getPartsHeaders();
    this.carBody = this.carparts.getBodyParts();
  }

}
