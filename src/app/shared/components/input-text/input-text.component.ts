import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputType } from '@core/models';

@Component({
  selector: 'shared-input-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-text.component.html'
})
export class InputTextComponent {
  @Input()
  public labelTitle!: string;

  @Input()
  public labelStyle: string = '';

  @Input()
  public typeInput: InputType = 'text';

  @Input()
  public value!: string;

  @Input()
  public control!: FormControl;
}