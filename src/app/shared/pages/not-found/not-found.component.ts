import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'shared-not-found',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  public year = signal<number>( new Date().getFullYear() )
}
