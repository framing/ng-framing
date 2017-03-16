import { Component } from '@angular/core';

import { ItemController } from '../item.controller';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent {
  public constructor(
    public itemController: ItemController,
  ) {
    this.itemController.listItems();
  }
}
