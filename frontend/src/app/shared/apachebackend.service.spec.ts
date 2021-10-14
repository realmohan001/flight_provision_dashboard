import { TestBed } from '@angular/core/testing';

import { ApachebackendService } from './apachebackend.service';

describe('ApachebackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApachebackendService = TestBed.get(ApachebackendService);
    expect(service).toBeTruthy();
  });
});
