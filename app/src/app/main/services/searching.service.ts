import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkOrdersResponse } from '../models/response.model';
import { WorkOrder } from '../models/work-order.model';

const ORDERS_URL = '../../../assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  workOrders$ = new Subject<WorkOrder[]>();

  async getInitialData(): Promise<void> {
    try {
      const res = await fetch(ORDERS_URL);
      const data: WorkOrdersResponse = await res.json();
      const workOrders = data.response.data;
      this.workOrders$.next(workOrders);
    } catch (err) {}
  }
}
