import { socialLinks } from "@/utils/constants";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-footer2",
  standalone: true,
  templateUrl: "./footer2.component.html",
  imports: [CommonModule],
})
export class Footer2Component {
  currentYear = new Date().getFullYear();
  socialLinks = socialLinks;

  constructor() {}
}
