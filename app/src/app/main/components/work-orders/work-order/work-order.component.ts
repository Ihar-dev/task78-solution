import { Component, Input, OnInit } from '@angular/core';
import { WorkOrder } from 'src/app/main/models/work-order.model';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {
  @Input() item: WorkOrder | null;
  assignedTo = '';

  constructor() {
    this.item = null;
  }

  ngOnInit(): void {
    if (this.item?.assigned_to && this.item.assigned_to.length > 0)
      this.assignedTo = this.item.assigned_to[0].person_name;
  }
}
