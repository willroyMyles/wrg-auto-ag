import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-partial',
  templateUrl: './search-partial.component.html',
  styleUrls: ['./search-partial.component.css']
})
export class SearchPartialComponent implements OnInit {

  constructor(private fg : FormBuilder) { }

public formgroup = this.fg.group({

})

  ngOnInit(): void {
  }

}
