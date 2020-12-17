import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfectionerListComponent } from './confectioner-list.component';

describe('ConfectionerListComponent', () => {
  let component: ConfectionerListComponent;
  let fixture: ComponentFixture<ConfectionerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfectionerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfectionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
