import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BtnComponent, EyeBtnComponent } from '@shared/components';
import { CustomLabelDirective } from '@shared/directives';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    BtnComponent,
    EyeBtnComponent,
    ReactiveFormsModule,
    CustomLabelDirective
  ]
})
export class RegisterModule { }
