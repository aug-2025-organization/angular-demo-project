import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../models/user-response.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string = 'http://localhost:3232';

  constructor(private httpClient: HttpClient) {}

  validateUser(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(
      `${this.baseUrl}/api/validate`,
      user
    );
  }
}
