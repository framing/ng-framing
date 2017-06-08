import { Component, Host, Injector } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';
import { MaterialItemDataController } from '../material-item-data.controller';

import { ListItemDirective } from '../shared/list-item.directive';

@Component({
  selector: 'item',
  template: `
    <h1>{{ listItem.itemData.label }}</h1>
  `,
})
export class ItemComponent extends MaterialItemDataComponent {
  constructor(
    controller: MaterialItemDataController,
    injector: Injector,
    @Host() public listItem: ListItemDirective,
  ) {
    super(controller, injector);
  }
}
