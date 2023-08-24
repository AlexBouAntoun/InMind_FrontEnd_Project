import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { appGuardGuard } from './app.guard.guard';

describe('appGuardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
