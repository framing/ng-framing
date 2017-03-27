import { Component, Host } from '@angular/core';

import { ListItemDirective } from '../shared/list-item.directive';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  constructor(
    @Host() public listItem: ListItemDirective,
  ) {
  }
}
