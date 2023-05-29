import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  LoginCredentials,
  RegistrationCredentials,
} from '../models/credentials.interface';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'logged_user';

  constructor(private httpClient: HttpClient, private router: Router) {}

  isAutheticated() {
    return localStorage.getItem(this.storageKey) != null;
  }

  registration(user: RegistrationCredentials) {
    return this.httpClient.post(`${environment.baseApiUrl}users`, user);
  }

  login(user: LoginCredentials) {
    return this.httpClient
      .get(
        `${environment.baseApiUrl}users?email=${user.email}&password=${user.password}`
      )
      .pipe(take(1))
      .subscribe((data: any) => {
        const responseToString = JSON.stringify({
          firstName: data[0].firstName,
          lastName: data[0].lastName,
          email: data[0].email,
        });

        if (data.length) {
          localStorage.setItem(this.storageKey, responseToString);
          this.router.navigateByUrl('/');
        }
      });
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigateByUrl('/login');
  }
}
