import { CardComponent } from "@/app/components/card/card.component";
import { Footer2Component } from "@/app/components/footer2/footer2.component";
import { HeaderComponent } from "@/app/components/header/header.component";
import { TransactionListComponent } from "@/app/components/transaction-list/transaction-list.component";
import { AccountService } from "@/app/services/account.service";
import { AuthService } from "@/app/services/auth.service";
import { Account, CardData } from "@/types";
import { CommonModule, formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "dashboard",
  standalone: true,
  templateUrl: "./dashboard.component.html",
  imports: [
    CommonModule,
    CardComponent,
    TransactionListComponent,
    HeaderComponent,
    Footer2Component,
  ],
})
export class DashboardComponent implements OnInit {
  token: string | null = localStorage.getItem("token");
  account: Account | null = null;
  currentDate = new Date();
  dateTimeNow = formatDate(this.currentDate, "d MMM y", "en");
  currentYear = this.currentDate.getFullYear();

  isLoading = true;
  isError = false;
  errorMessage = "";

  isTapcashEnabled = true;
  isTapcashBalanceVisible = false;
  isDebitBalanceVisible = false;

  cardList: CardData | undefined = undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  async ngOnInit() {
    if (!this.token) {
      this.authService.getToken().subscribe((data) => {
        this.token = data;
      });
    }

    this.accountService.getAcount().subscribe((data) => {
      this.account = data;
    });

    this.loadUser();
  }

  async loadUser() {
    this.isLoading = true;

    try {
      const userDataRes = await this.accountService.getUserData(this.token!);
      this.accountService.setAccount(userDataRes.data);

      const cardsDataRes = await this.accountService.getCardsData(
        this.account!.virtualTapCashId!,
        this.token!
      );
      this.cardList =
        cardsDataRes.data.length > 0 ? cardsDataRes.data[0] : undefined;
    } catch (error: any) {
      if (error.response?.status === 401) {
        this.authService.logout();

        this.accountService.setAccount(null);
        this.router.navigate(["/login"], {
          replaceUrl: true,
        });

        return;
      }

      this.isError = true;
      this.errorMessage = error.messsage;
    } finally {
      this.isLoading = false;
    }
  }
}
