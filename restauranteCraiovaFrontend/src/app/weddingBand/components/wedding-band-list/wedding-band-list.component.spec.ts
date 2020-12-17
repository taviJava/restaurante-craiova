import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingBandListComponent } from './wedding-band-list.component';

describe('WeddingBandListComponent', () => {
  let component: WeddingBandListComponent;
  let fixture: ComponentFixture<WeddingBandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingBandListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingBandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
