import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcoverComponent } from './bookcover.component';

describe('BookcoverComponent', () => {
  let component: BookcoverComponent;
  let fixture: ComponentFixture<BookcoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookcoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
