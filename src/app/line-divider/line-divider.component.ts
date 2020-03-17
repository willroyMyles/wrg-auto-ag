import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-divider',
  templateUrl: './line-divider.component.html',
  styles: [`
  .vertical-divider {
    display: table;
    text-align: center;
    height: 100%;
    width: 100%;
    color : rgb(200,200,200);
    padding : 15px;
}
  .vertical-divider .center-element {
    position: relative;
    display: table-cell;
    vertical-align: middle;
}
.vertical-divider .center-element::before {
    bottom: 50%;
    top: 0;
    margin-bottom: 20px;

}
.vertical-divider .center-element::before, .vertical-divider .center-element::after {
    position: absolute;
    content: "";
    width: 1px;
    left: 50%;
    border-left: 1px solid rgb(200,200,200);
;
}
.vertical-divider .center-element::after {
    top: 50%;
    bottom: 0;
    margin-top: 20px;
}

  `],
})
export class LineDividerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
