import { TestBed } from '@angular/core/testing';

import { TcbackendService } from './tcbackend.service';

describe('TcbackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TcbackendService = TestBed.get(TcbackendService);
    expect(service).toBeTruthy();
  });
});
