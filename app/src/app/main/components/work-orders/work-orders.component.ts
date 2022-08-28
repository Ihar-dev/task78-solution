import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkOrder } from '../../models/work-order.model';
import { SearchingService } from '../../services/searching.service';

@Component({
  selector: 'app-work-orders',
  templateUrl: './work-orders.component.html',
  styleUrls: ['./work-orders.component.scss'],
})
export class WorkOrdersComponent implements OnInit, OnDestroy {
  items: WorkOrder[];
  private itemsSubs: Subscription | null;

  constructor(private searchingService: SearchingService) {
    this.items = [];
    this.itemsSubs = null;
  }

  ngOnInit(): void {
    this.searchingService.getInitialData();
    this.itemsSubs = this.searchingService.workOrders$.subscribe(
      (workOrders) => (this.items = workOrders)
    );
  }

  ngOnDestroy(): void {
    if (this.itemsSubs) this.itemsSubs.unsubscribe();
  }
}
