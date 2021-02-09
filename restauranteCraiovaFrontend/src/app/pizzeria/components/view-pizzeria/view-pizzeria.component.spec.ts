import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPizzeriaComponent } from './view-pizzeria.component';

describe('ViewPizzeriaComponent', () => {
  let component: ViewPizzeriaComponent;
  let fixture: ComponentFixture<ViewPizzeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPizzeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPizzeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
