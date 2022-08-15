import { TestBed } from '@angular/core/testing';

import { LoginRegisterGuardService } from './login-register-guard.service';

describe('LoginRegisterGuardService', () => {
  let service: LoginRegisterGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegisterGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
