import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "card",
  standalone: true,
  templateUrl: "./card.component.html",
  imports: [CommonModule],
})
export class CardComponent {
  @Input() cardType!: "tapcash" | "debit";
  @Input() cardName!: string;
  @Input() cardNo!: string;

  constructor() {}

  ngOnInit() {
    this.cardNo = this.cardNo.match(/.{1,4}/g)!.join(" ");
  }
}
