import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { WorkOrdersComponent } from './components/work-orders/work-orders.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainRoutingModule } from './main-routing.module';
import { WorkOrderComponent } from './components/work-orders/work-order/work-order.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WorkOrdersComponent,
    WelcomeComponent,
    WorkOrderComponent,
  ],
  imports: [CommonModule, MainRoutingModule, FormsModule],
})
export class MainModule {}
