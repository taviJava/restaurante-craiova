import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConfectionerComponent } from './view-confectioner.component';

describe('ViewConfectionerComponent', () => {
  let component: ViewConfectionerComponent;
  let fixture: ComponentFixture<ViewConfectionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConfectionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConfectionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
