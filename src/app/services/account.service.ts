import { Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@/environments/environment";
import { Account } from "@/types";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  readonly API_URL = environment.apiUrl;
  readonly account = signal<Account | null>(null);

  constructor(private httpClient: HttpClient) {}

  getUserData(token: string) {
    return this.httpClient.get<any>(
      this.API_URL + "/account/get-user-data",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  }
}
