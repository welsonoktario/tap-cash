import { Injectable } from "@angular/core";
import { environment } from "@/environments/environment";
import axios from "axios";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly _token = new BehaviorSubject<string | null>(null);

  constructor() {}

  get token() {
    return this._token.getValue();
  }

  getToken() {
    return this._token.asObservable();
  }

  setToken(token: string | null) {
    this._token.next(token);
  }

  async login(loginPayload: { username: string; pin: string }) {
    return await axios.post<string>(
      environment.apiUrl + "/auth/login",
      loginPayload,
      {
        headers: {
          Accept: "text/plain",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  }

  logout() {
    try {
      this.setToken(null);
      localStorage.removeItem("token");

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
