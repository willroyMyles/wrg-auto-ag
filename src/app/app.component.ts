import { Component, OnInit } from '@angular/core';
declare var device

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener("deviceready", function() {
      alert("hi");
      }, false);
  }
  title = 'wrg-auto-ag';
}
