import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaAddComponent } from './pizzeria-add.component';

describe('PizzeriaAddComponent', () => {
  let component: PizzeriaAddComponent;
  let fixture: ComponentFixture<PizzeriaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzeriaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
