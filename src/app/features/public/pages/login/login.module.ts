import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BtnComponent } from '@shared/components';
import { EyeBtnComponent } from '@shared/components/eye-btn/eye-btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomLabelDirective } from '@shared/directives';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BtnComponent,
    EyeBtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ]
})
export class LoginModule { }
