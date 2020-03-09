import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPartialComponent } from './search-partial.component';

describe('SearchPartialComponent', () => {
  let component: SearchPartialComponent;
  let fixture: ComponentFixture<SearchPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
