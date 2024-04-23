import { AuthService } from "@/app/services/auth.service";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  imports: [CommonModule],
})
export class HeaderComponent {
  username = this.authService.authUser()?.username;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  logout() {
    if (this.authService.logout()) {
      this.router.navigate(["/login"], {
        replaceUrl: true,
      });
    }
  }
}
