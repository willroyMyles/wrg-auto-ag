import { Component, OnInit, Input } from '@angular/core';
import { CarInfoService } from '../car-info.service';
import { Router } from '@angular/router';
import { PartsViewComponent } from '../parts-view/parts-view.component';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-parts-section',
  templateUrl: './parts-section.component.html',
  styleUrls: ['./parts-section.component.css']
})
export class PartsSectionComponent implements OnInit {

  @Input('title') title;
  @Input('bodyParts') parts;


  constructor(private carPartsInfo : CarInfoService,
     private router : Router,
     private holder : HolderService

     ) { }

  ngOnInit(): void {
  }

  public showPage(itemName, index){
    // todo
    // TODO:  if not logged in  ask user to log in first
    this.holder.setBreadcrub(this.title);
    this.holder.setBreadcrub(itemName);
    this.router.navigate(['/parts', this.title,  index])
  }

}
