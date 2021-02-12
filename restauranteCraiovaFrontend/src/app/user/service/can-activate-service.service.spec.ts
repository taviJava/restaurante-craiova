import { TestBed } from '@angular/core/testing';

import { CanActivateServiceService } from './can-activate-service.service';

describe('CanActivateServiceService', () => {
  let service: CanActivateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
