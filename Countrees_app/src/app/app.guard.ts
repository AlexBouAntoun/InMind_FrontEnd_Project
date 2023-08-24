import { CanActivateChildFn, Router } from '@angular/router';

export const appGuard: CanActivateChildFn = (childRoute, state) => {
  let auth_token = localStorage.getItem('AuthToken');

  if(auth_token == undefined) {
    const router = new Router();
    router.navigate(['signin']);
    return false;
  }  
  else{
    return true;
  }
};
