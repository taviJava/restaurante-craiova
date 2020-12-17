import { TestBed } from '@angular/core/testing';

import { ConfectionerService } from './confectioner.service';

describe('ConfectionerService', () => {
  let service: ConfectionerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfectionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
