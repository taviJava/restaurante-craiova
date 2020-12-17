import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingBandAddComponent } from './wedding-band-add.component';

describe('WeddingBandAddComponent', () => {
  let component: WeddingBandAddComponent;
  let fixture: ComponentFixture<WeddingBandAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingBandAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingBandAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
