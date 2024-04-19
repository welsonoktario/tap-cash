import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const random = Math.round(Math.random() * 10) / 10;
    console.log(random);
    if (random < 0.5) {
      return true;
    }

    return this.router.navigate(['/login']);
  }
}
