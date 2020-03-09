import { Component, OnInit, Input } from '@angular/core';
import { CarInfoService } from '../car-info.service';

@Component({
  selector: 'app-parts-section',
  templateUrl: './parts-section.component.html',
  styleUrls: ['./parts-section.component.css']
})
export class PartsSectionComponent implements OnInit {

  @Input('title') headliners;
  @Input('bodyParts') parts;


  constructor(private carPartsInfo : CarInfoService) { }

  ngOnInit(): void {
  }

}
