import { Component, OnInit, Injectable } from '@angular/core';
import { CarInfoService } from '../car-info.service';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { Moment } from 'moment'
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { PostsObject, PostStatus } from '../posts';

@Component({
  selector: 'app-parts-view',
  templateUrl: './parts-view.component.html',
  styleUrls: ['./parts-view.component.css']
})

export class PartsViewComponent implements OnInit {

  public sectionId;
  public partsId;

  public headings;
  public title;

  public actiRoute;
  mySubscription: any;

  public  appropriatePosts = [];
  public dataProvided = false;
  public currentStatusFilter : PostStatus = PostStatus.open;

  constructor(
    private cis : CarInfoService,
    private route : ActivatedRoute,
    private router : Router,
    private db : DatabaseService
   ) {

    }

  ngOnInit(): void {


    this.setup();
  }


  private setup(){


    this.route.paramMap.subscribe((par : ParamMap) =>{

      this.title = par.get("section")
      this.partsId = par.get("parts")

      this.cis.testArr.subscribe( res => {
        if(res == null) return;
        this.sectionId = this.cis.getTitleIndex(this.title);
        //this.actiRoute = this.cis.getBodyParts()[this.sectionId][this.partsId];
        this.headings = res[this.sectionId];
        this.provideData();
      })



    })
  }

  public test(){

  }

  public isCurrent(index) : boolean{
    return index == this.partsId;
  }

  public goto(item){
    this.router.navigate(["parts", this.title, item])
  }

  public createPost(){
    var titleIndex = this.cis.getTitleIndex(this.title);
    this.router.navigate(["create-post", {cat : titleIndex, subcat : this.partsId}])
  }

  public provideData(){
    var index = this.sectionId;
    console.log("index ", index);
    this.db.getPosts(this.sectionId.toString(), this.partsId).then( (res : Array<PostsObject>) =>{
      this.appropriatePosts = res;
      this.dataProvided = res.length > 0? true:false
    })
  }

  public sortBy( stat :PostStatus){
    this.currentStatusFilter = stat;

  }

}
