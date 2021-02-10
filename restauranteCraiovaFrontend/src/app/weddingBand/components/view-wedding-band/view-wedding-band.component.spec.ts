import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeddingBandComponent } from './view-wedding-band.component';

describe('ViewWeddingBandComponent', () => {
  let component: ViewWeddingBandComponent;
  let fixture: ComponentFixture<ViewWeddingBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeddingBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWeddingBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
