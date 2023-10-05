import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-title-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-card.component.html'
})
export class TitleCardComponent {
  @Input()
  title!: string;

  @Input()
  topMargin: string = 'mt-6';

  get margin() {
    return {
      topMargin: true
    }
  }
}
