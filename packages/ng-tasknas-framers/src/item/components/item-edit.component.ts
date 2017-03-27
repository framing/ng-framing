import { Component } from '@angular/core';

import { ItemController } from '../item.controller';

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
})
export class ItemEditComponent {
  public constructor(
    public itemController: ItemController,
  ) {
    itemController.editItem();
  }
}
