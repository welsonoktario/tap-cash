import { CommonModule } from '@angular/common';
import { Component, Input, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'table-transaction',
  standalone: true,
  templateUrl: './table-transaction.component.html',
  imports: [CommonModule],
})
export class TableTransactionComponent {
  @Input() transactions: any[] = [];

  constructor() {}
}
