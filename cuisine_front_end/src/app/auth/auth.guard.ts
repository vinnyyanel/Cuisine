import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route,state) => {

  let token = localStorage.getItem('Token');

  if (token == null) {
    return false;
  } else {
    return true;
  }
};
