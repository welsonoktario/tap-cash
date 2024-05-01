import { Injectable } from "@angular/core";
import { environment } from "@/environments/environment";
import { Account, CardData } from "@/types";
import { BehaviorSubject } from "rxjs";
import axios from "axios";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  readonly API_URL = environment.apiUrl;
  private readonly _account = new BehaviorSubject<Account | null>(null);

  constructor() {}

  getAcount() {
    return this._account.asObservable();
  }

  setAccount(account: Account | null) {
    this._account.next(account);
  }

  getUserData(token: string) {
    return axios.get<any>(this.API_URL + "/account/get-user-data", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "ngrok-skip-browser-warning": "true",
      },
    });
  }

  getCardsData(virtualTapCashId: string, token: string) {
    return axios.get<CardData[]>(
      this.API_URL + "/card/get-cards-data/" + virtualTapCashId,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "ngrok-skip-browser-warning": "true",
        },
      }
    );
  }

  getTransactions(cardId: string, token: string) {
    return axios.get(
      this.API_URL + "/transaction/get-transaction-data/" + cardId,
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
