import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route,state) => {

  let token = localStorage.getItem('Token');

  return token? true:false;
};
