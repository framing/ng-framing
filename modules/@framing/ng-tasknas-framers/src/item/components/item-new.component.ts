import { Component } from '@angular/core';

import { ItemController } from '../item.controller';

@Component({
  selector: 'item-new',
  templateUrl: './item-new.component.html',
})
export class ItemNewComponent {
  public constructor(
    public itemController: ItemController,
  ) {
    itemController.newItem();
  }
}
