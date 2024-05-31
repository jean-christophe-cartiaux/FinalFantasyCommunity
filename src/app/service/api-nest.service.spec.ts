import { TestBed } from '@angular/core/testing';

import { ApiNestService } from './api-nest.service';

describe('ApiNestService', () => {
  let service: ApiNestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiNestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
