import { Component, OnInit, Input } from '@angular/core';
import { PostsObject } from '../posts';
import { CarInfoService } from '../car-info.service';
import { DatabaseService } from '../database.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HolderService } from '../holder.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../app.component.css']
})
export class CardComponent implements OnInit {

  @Input("data") postArray : PostsObject[];
  public usernames : string[];


  constructor(
    private csi : CarInfoService,
    private db : DatabaseService,
    private route :ActivatedRoute,
    private router : Router,
    private holder : HolderService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((p : ParamMap) =>{

    })

  }

  public titleClicked(item : PostsObject){
    this.holder.storeItem(item);
    this.router.navigate(["post"])
  }

}
