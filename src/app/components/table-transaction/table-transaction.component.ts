import { Transaction } from "@/types";
import { chunk } from "@/utils/utils";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "table-transaction",
  standalone: true,
  templateUrl: "./table-transaction.component.html",
  imports: [CommonModule],
})
export class TableTransactionComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  filteredTransactions: Transaction[][] = [];

  transactionTypeMap = {
    TOPUP: "Top Up",
    WITHDRAW: "Penarikan",
    PAYMENT: "Pembayaran",
  };

  // jumlah item yang muncul dalam 1 halaman tabel
  perPage = 10;
  // halaman tabel saat ini
  page = 1;
  // total jumlah halaman tabel (transactions.length / perPage)
  pageCount = 1;

  constructor() {}

  ngOnInit(): void {
    this.filteredTransactions = chunk(this.transactions, this.perPage);
    this.pageCount = Math.ceil(this.transactions.length / this.perPage);
  }
}
