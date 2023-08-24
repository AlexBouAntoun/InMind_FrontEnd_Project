import { CanActivateChildFn } from '@angular/router';

export const appGuardGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
