import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    HeaderComponent,
    WorkOrdersComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
