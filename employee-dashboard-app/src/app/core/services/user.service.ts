import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistrationCredentials } from '../auth/models/credentials.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<RegistrationCredentials[]> {
    return this.httpClient.get<RegistrationCredentials[]>(
      `${environment.baseApiUrl}users`
    );
  }
}
