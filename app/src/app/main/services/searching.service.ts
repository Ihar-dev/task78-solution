import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { WorkOrdersResponse } from '../models/response.model';
import { WorkOrder } from '../models/work-order.model';

const ORDERS_URL = '../../../assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  workOrders$ = new Subject<WorkOrder[]>();
  workOrders: WorkOrder[];

  constructor(private http: HttpClient) {
    this.workOrders = [];
  }

  getInitialData(): void {
    this.http
      .get<WorkOrdersResponse>(ORDERS_URL)
      .subscribe((res: WorkOrdersResponse) => {
        const workOrders = res.response.data;
        this.workOrders$.next(workOrders);
        this.workOrders = workOrders;
      });
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
