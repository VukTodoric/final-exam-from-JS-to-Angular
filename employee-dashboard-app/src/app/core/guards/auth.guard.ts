import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    return this.isAuth();
  }
  canLoad(): boolean {
    return this.isAuth();
  }

  isAuth() {
    if (!this.authService.isAutheticated()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
