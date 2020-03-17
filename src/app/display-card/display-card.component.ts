import { Component, OnInit, Input } from '@angular/core';
import { SwalService } from '../swal.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {

  @Input("name") displayName;

  constructor(
    private swal : SwalService
  ) { }

  ngOnInit(): void {
  }

  public showOptions(){
    var body = `<div class="container">
    <div class="row">
      <div class="col-md-12">
        <div> <img class="card-img-top" src="assets/images/user.png" alt=""></div>
        <div>${this.displayName}</div>
        <hr>
        <div class="text-center"><a href="">view profile</a></div>
        <div class="text-center"><a href="">send a message</a></div>
      </div>
    </div>
  </div>`;
  this.swal.displayProfileOptions(body);
  }

}
