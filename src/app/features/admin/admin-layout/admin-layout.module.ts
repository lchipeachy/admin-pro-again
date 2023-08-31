import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';

import {
  FooterComponent,
  HeaderComponent,
  BreadcrumsComponent,
  SidebarComponent
} from './components'


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
