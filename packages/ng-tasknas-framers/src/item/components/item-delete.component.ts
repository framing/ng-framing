import { Component } from '@angular/core';

import { ItemController } from '../item.controller';

@Component({
  selector: 'item-delete',
  templateUrl: './item-delete.component.html',
})
export class ItemDeleteComponent {
  public constructor(
    public itemController: ItemController,
  ) {}
}
