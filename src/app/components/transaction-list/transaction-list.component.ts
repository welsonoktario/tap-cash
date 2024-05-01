import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableTransactionComponent } from "@/app/components/table-transaction/table-transaction.component";
import { AccountService } from "@/app/services/account.service";
import { Account } from "@/types";

@Component({
  selector: "transaction-list",
  standalone: true,
  templateUrl: "./transaction-list.component.html",
  imports: [CommonModule, TableTransactionComponent],
})
export class TransactionListComponent implements OnInit {
  @Input() cardId!: string;
  token: string | null = localStorage.getItem("token");
  account: Account | null = null;

  isLoading = true;
  isError = false;
  errorMessage = "";
  transactions: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService
      .getTransactions(this.cardId, this.token!)
      .then((data) => {
        this.transactions = data.data;
      })
      .catch((err: any) => {
        this.isError = true;
        this.errorMessage = err.message;
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
