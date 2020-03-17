import { Component, OnInit } from '@angular/core';
import { CarInfoService } from '../car-info.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsObject } from '../posts';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {

  public categories;
  public subCategories;

  public carCategories;
  public carSubCategories;

  public isMobile;

  public cat;
  public subcat;

  editorConfig: AngularEditorConfig = {
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
  private cis : CarInfoService,
  private div : DeviceDetectorService,
  private route : ActivatedRoute,
  private fb : FormBuilder,
  private db : DatabaseService
  ) { }


  public formgroup = this.fb.group({
    partCat : ["",[Validators.required]],
    partSubCat : ["",[Validators.required]],
    carCat : ["",[Validators.required]],
    carSubCat : ["",[Validators.required]],
    year : ["1999",[Validators.required]],
    title : ["title test",[Validators.required]],
    text : ["text test",[Validators.required]]
  })

  public getFormControl(control){
    return this.formgroup.get(control);
  }

  ngOnInit(): void {
    this.isMobile = this.div.isMobile();
    this.categories = this.cis.getPartsHeaders();
    this.carCategories = this.cis.getCarsHeaders();

    this.cat = this.route.paramMap.subscribe((pram : ParamMap)=>{
      this.cat = pram.get("cat");
      this.subcat = pram.get("subcat");

      this.getFormControl("partCat").setValue(this.cat);
      this.changeSubCategory(this.subcat)
      this.getFormControl("partSubCat").setValue(this.subcat);

      console.log(this.cat, this.subcat);
    })
  }

  public changeSubCategory(value){
    this.subCategories = this.cis.getBodyParts()[value];
  }

  public changeCarHeaderCategory(value){
    this.carSubCategories = this.cis.getCarList()[value];
  }

  public onSubmit(){
    var post = new PostsObject();
    post.body = this.getFormControl("text").value;
    post.title = this.getFormControl("title").value;
    post.category = this.getFormControl("partCat").value;
    post.sub_category = this.getFormControl("partSubCat").value;
    post.make = this.getFormControl("carCat").value;
    post.model = this.getFormControl("carSubCat").value;
    post.year = this.getFormControl("year").value;
    post.userId = this.db.getId().toString();
    post.time = new Date();

    this.db.addPost(post);

  }

}
