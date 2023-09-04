import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-btn',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './btn.component.html',
})
export class BtnComponent {

}
