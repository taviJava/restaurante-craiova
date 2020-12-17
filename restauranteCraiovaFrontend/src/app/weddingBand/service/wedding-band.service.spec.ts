import { TestBed } from '@angular/core/testing';

import { WeddingBandService } from './wedding-band.service';

describe('WeddingBandService', () => {
  let service: WeddingBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddingBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
