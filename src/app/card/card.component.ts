import { Component, OnInit, Input } from '@angular/core';
import { PostsObject } from '../posts';
import { CarInfoService } from '../car-info.service';
import { DatabaseService } from '../database.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HolderService } from '../holder.service';
import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
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
    this.router.navigate(["post", item._id])
  }

}
