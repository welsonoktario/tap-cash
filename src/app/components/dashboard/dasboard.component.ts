import { CardComponent } from '@/app/components/card/card.component';
import { TableTransactionComponent } from '@/app/components/table-transaction/table-transaction.component';
import { AuthService } from '@/app/services/auth.service';
import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, CardComponent, TableTransactionComponent],
})
export class DashboardComponent {
  authUser = this.authService.authUser();
  dateTimeNow = formatDate(new Date(), 'd MMM y', 'en');
  isTapcashEnabled = false;

  constructor(private router: Router, private authService: AuthService) {}

  async handleLogout() {
    if (!this.authService.logout()) {
      console.error('Logout failed');
    }

    this.router.navigate(['/login'], {
      replaceUrl: true,
    });
  }
}
