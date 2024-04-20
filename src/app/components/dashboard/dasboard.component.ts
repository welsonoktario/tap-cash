import { AuthService } from '@/app/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
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
