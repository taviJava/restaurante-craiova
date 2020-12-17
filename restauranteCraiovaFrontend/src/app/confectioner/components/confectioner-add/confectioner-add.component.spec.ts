import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfectionerAddComponent } from './confectioner-add.component';

describe('ConfectionerAddComponent', () => {
  let component: ConfectionerAddComponent;
  let fixture: ComponentFixture<ConfectionerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfectionerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfectionerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
