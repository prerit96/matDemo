import { TestBed } from '@angular/core/testing';

import { ValidateAuthService } from './validate-auth.service';

describe('ValidateAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateAuthService = TestBed.get(ValidateAuthService);
    expect(service).toBeTruthy();
  });
});
