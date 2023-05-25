import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegistrationCredentials } from '../models/credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  registration(user: RegistrationCredentials) {
    return this.httpClient.post(`${environment.baseApiUrl}users`, user);
  }
}
