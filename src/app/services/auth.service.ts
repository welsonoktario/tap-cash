import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly authUser = signal<any | null>(null);

  constructor(private httpClient: HttpClient) {}

  loginDummy({ username, password }: { username: string; password: string }) {
    this.authUser.set({ username });
    localStorage.setItem('user', JSON.stringify({ username }));
  }

  login(loginPayload: { username: string; password: string }) {
    return this.httpClient.post<any>(
      '/api/auth/login',
      loginPayload
    );
  }

  logout() {
    try {
      this.authUser.set(null);
      localStorage.removeItem('user');

      return true;
    } catch (error) {
      return false;
    }
  }
}
