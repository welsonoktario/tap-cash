import { CardComponent } from "@/app/components/card/card.component";
import { Footer2Component } from "@/app/components/footer2/footer2.component";
import { HeaderComponent } from "@/app/components/header/header.component";
import { TableTransactionComponent } from "@/app/components/table-transaction/table-transaction.component";
import { AccountService } from "@/app/services/account.service";
import { AuthService } from "@/app/services/auth.service";
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
    TableTransactionComponent,
    HeaderComponent,
    Footer2Component,
  ],
})
export class DashboardComponent implements OnInit {
  authUser = this.authService.authUser();
  account = this.accountService.account();
  currentDate = new Date();
  dateTimeNow = formatDate(this.currentDate, "d MMM y", "en");
  currentYear = this.currentDate.getFullYear();

  isLoading = true;
  isError = false;
  errorMessage = "";

  isTapcashEnabled = true;
  isTapcashBalanceVisible = false;
  isDebitBalanceVisible = false;

  transactions = [
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Keluar",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Keluar",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Keluar",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Keluar",
      amount: 100000,
    },
    {
      date: new Date(),
      type: "Masuk",
      amount: 100000,
    },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.accountService
      .getUserData()
      .then((data) => {
        this.accountService.account.set(data);
      })
      .catch((error: any) => {
        this.isError = true;
        this.errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }

  async handleLogout() {
    if (!this.authService.logout()) {
      console.error("Logout failed");
    }

    this.router.navigate(["/login"], {
      replaceUrl: true,
    });
  }
}
