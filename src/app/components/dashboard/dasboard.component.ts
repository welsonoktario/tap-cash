import { CardComponent } from "@/app/components/card/card.component";
import { Footer2Component } from "@/app/components/footer2/footer2.component";
import { HeaderComponent } from "@/app/components/header/header.component";
import { TableTransactionComponent } from "@/app/components/table-transaction/table-transaction.component";
import { AuthService } from "@/app/services/auth.service";
import { CommonModule, formatDate } from "@angular/common";
import { Component } from "@angular/core";
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
export class DashboardComponent {
  authUser = this.authService.authUser();
  currentDate = new Date();
  dateTimeNow = formatDate(this.currentDate, "d MMM y", "en");
  currentYear = this.currentDate.getFullYear();
  isTapcashEnabled = true;
  isDebitNumberVisible = true;
  isDebitBalanceVisible = true;

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
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async handleLogout() {
    if (!this.authService.logout()) {
      console.error("Logout failed");
    }

    this.router.navigate(["/login"], {
      replaceUrl: true,
    });
  }
}
