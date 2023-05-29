import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeDetails } from '../models/employee-details.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getAllEmployee(): Observable<EmployeeDetails[]> {
    return this.httpClient.get<EmployeeDetails[]>(
      `${environment.baseApiUrl}employee`
    );
  }

  serachEmployeeByEmail(search: string): Observable<EmployeeDetails> {
    return this.httpClient.get<EmployeeDetails>(
      `${environment.baseApiUrl}employee?email_like=${search}`
    );
  }
}
