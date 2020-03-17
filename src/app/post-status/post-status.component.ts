import { Component, OnInit, Input } from '@angular/core';
import { PostStatus } from '../posts';

@Component({
  selector: 'app-post-status',
  templateUrl: './post-status.component.html',
  styleUrls: ['./post-status.component.css']
})



export class PostStatusComponent implements OnInit {

  @Input("status") status;
  public postStatus : PostStatus

  constructor() { }

  ngOnInit(): void {
    this.postStatus = PostStatus.open;
    if(status) this.evalStatus(status);
  }

  public evalStatus ( status){
    if(status == "open") this.postStatus = PostStatus.open;
    if(status == "closed") this.postStatus = PostStatus.closed;
    if(status == "inactive") this.postStatus = PostStatus.inactive;
    if(status == "filled") this.postStatus = PostStatus.filled;
  }

  public isOpen(){
    return this.postStatus == PostStatus.open;
  }
  public isClosed(){
    return this.postStatus == PostStatus.closed;
  }
  public isInactive(){
    return this.postStatus == PostStatus.inactive;
  }
  public isFilled(){
    return this.postStatus == PostStatus.filled;
  }

}
