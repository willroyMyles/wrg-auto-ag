import { Component, OnInit, Input } from '@angular/core';
import { ReplyObject } from '../replies';

@Component({
  selector: 'app-reply-view',
  templateUrl: './reply-view.component.html',
  styleUrls: ['./reply-view.component.css']
})
export class ReplyViewComponent implements OnInit {

  @Input("replies") replies : ReplyObject[];
  constructor() { }

  ngOnInit(): void {
  }

}
