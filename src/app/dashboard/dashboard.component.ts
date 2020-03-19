import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { SwalService } from '../swal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private db : DatabaseService,
    private swal : SwalService
  ) { }

  ngOnInit(): void {
  }

  public clearUsers(){
    var val = 'users'
    this.db.deleteUsers().then(res =>{
      if(res) this.swal.displayToast('success', `deleted all ${val}`)
      else    this.swal.displayToast('error', `didnt deleted all ${val}`)

    })
  }

  public clearPosts(){
    var val = 'posts'
    this.db.detelePosts().then(res =>{
      if(res) this.swal.displayToast('success', `deleted all ${val}`)
      else    this.swal.displayToast('error', `didnt deleted all ${val}`)

    })
  }

  public clearReplies(){
    var val = 'replies'
    this.db.deteleReplies().then(res =>{
      if(res) this.swal.displayToast('success', `deleted all ${val}`)
      else    this.swal.displayToast('error', `didnt deleted all ${val}`)

    })
  }

  public clearMongoUsers(){

  }

  public clearAll(){
    this.clearUsers();
    this.clearReplies();
    this.clearPosts();
  }

}
