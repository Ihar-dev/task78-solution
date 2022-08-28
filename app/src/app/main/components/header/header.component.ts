import { Component } from '@angular/core';

import { SearchingService } from '../../services/searching.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dataForSearch = '';

  constructor(private searchingService: SearchingService) {}

  makeSearch(): void {
    this.searchingService.search(this.dataForSearch);
  }
}
