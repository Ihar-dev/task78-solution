import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { WorkOrdersResponse } from '../models/response.model';
import { WorkOrder } from '../models/work-order.model';

const ORDERS_URL = '/task78-solution/app/dist/app/assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  workOrders$ = new Subject<WorkOrder[]>();
  workOrders: WorkOrder[];

  constructor() {
    this.workOrders = [];
  }

  async getInitialData(): Promise<void> {
    try {
      const res = await fetch(ORDERS_URL);
      const data: WorkOrdersResponse = await res.json();
      const workOrders = data.response.data;
      this.workOrders$.next(workOrders);
      this.workOrders = workOrders;
    } catch (err) {}
  }

  search(dataForSearch: string): void {
    if (dataForSearch) {
      const workOrders = this.workOrders.filter((order) =>
        order.description.toLowerCase().includes(dataForSearch.toLowerCase())
      );
      this.workOrders$.next(workOrders);
    } else this.workOrders$.next(this.workOrders);
  }
}
