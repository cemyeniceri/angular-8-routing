import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      ((resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      })
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
