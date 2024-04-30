import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  readonly token = signal<string | null>(null);
  readonly authUser = signal<any | null>(null);

  constructor(private httpClient: HttpClient) {}

  loginDummy({ username, password }: { username: string; password: string }) {
    this.authUser.set({ username });
    localStorage.setItem("user", JSON.stringify({ username }));
  }

  login(loginPayload: { username: string; pin: string }) {
    return this.httpClient.post(
      environment.apiUrl + "/auth/login",
      loginPayload,
      {
        responseType: "text",
      }
    );
  }

  logout() {
    try {
      this.authUser.set(null);
      localStorage.removeItem("token");

      return true;
    } catch (error) {
      return false;
    }
  }
}
