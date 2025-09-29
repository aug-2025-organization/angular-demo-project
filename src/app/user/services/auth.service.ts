import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  deleteToken(): void {
    localStorage.removeItem('jwtToken');
  }

  retrieveToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  storeUserInfo(user: User): void {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  deleteUserInfo(): void {
    localStorage.removeItem('userInfo');
  }

  retrieveUserInfo(): User | null {
    let fetchedUserString = localStorage.getItem('userInfo');
    if (fetchedUserString != null) {
      return JSON.parse(fetchedUserString);
    }
    return null;
  }

  retrieveRole(): Role[] | undefined {
    let user = this.retrieveUserInfo();
    return user?.allRoles;
  }
}
