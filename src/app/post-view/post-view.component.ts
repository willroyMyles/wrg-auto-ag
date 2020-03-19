import { Component, OnInit } from '@angular/core';
import { PostsObject } from '../posts';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HolderService } from '../holder.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder } from '@angular/forms';
import { ReplyObject } from '../replies';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  public post : PostsObject
  public replies;
  public replyHidden = false;
  public editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '400',
      minHeight: '270px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

  constructor(
    private route : ActivatedRoute,
    private holder : HolderService,
    private div : DeviceDetectorService,
    private fb : FormBuilder,
    private db : DatabaseService
    ) { }

    public replyForm = this.fb.group({
      text : [""],
      notify : [true]
    });

    public working = true;
    public postRecieved = false;

  ngOnInit(): void {

      this.route.paramMap.subscribe( (p : ParamMap)=>{
        this.db.getOnePost(p.get("id")).then( (res : PostsObject) =>{
          this.post = res;
          this.working = false;
        })
      })

      // this.post = this.holder.getItem() as PostsObject;
      // this.getReplies();
  }

  public getReplyText(){
    if(this.replies == undefined) return "0 replies";
    if(this.replies.length == 0) return "0 replies";
    return this.replies.length > 1 ? this.replies.length + " replies" : "1 reply";
  }

  public changeReply(val :boolean){


    if(val === true && this.replyHidden){
      //get compenents and post to database;
      this.sendPost();

      return;
    }

    this.replyHidden = val;
  }

  public isMobile(){
    return this.div.isMobile();
  }

  public sendPost(){
    var reply = new ReplyObject();
    reply.body = this.replyForm.get("text").value;
    reply.notify = this.replyForm.get("notify").value;
    reply.postId = this.post._id;
    reply.userId = this.post.userId;
    reply.username = this.post.username;
    reply.time = new Date();

    this.db.addReply(reply);
  }

  public getReplies(){
    this.db.getReplies(this.post._id).then( res =>{
      this.replies = res;
    })
  }

}
