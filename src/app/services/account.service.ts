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

  async getUserData(userId = 1) {
    // https://4ff3-103-166-137-242.ngrok-free.app/api/v1/card/get-cards-data/VT123456
    /* return this.httpClient.get<Account>(
      this.API_URL + "/account/get-user-data/" + userId,
      {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    ); */

    const res = await fetch(this.API_URL + "/account/get-user-data/" + userId, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });

    return await res.json();
  }
}
