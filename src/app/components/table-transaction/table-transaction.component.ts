import { Transaction } from "@/types";
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "table-transaction",
  standalone: true,
  templateUrl: "./table-transaction.component.html",
  imports: [CommonModule],
})
export class TableTransactionComponent {
  @Input() transactions: Transaction[] = [];
  transactionTypeMap = {
    TOPUP: "Top Up",
    WITHDRAW: "Penarikan",
    PAYMENT: "Pembayaran",
  };

  constructor() {}
}
