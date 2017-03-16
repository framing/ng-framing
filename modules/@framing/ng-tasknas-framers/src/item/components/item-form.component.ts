import { Component } from '@angular/core';

import { ItemController } from '../item.controller';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.component.html',
})
export class ItemFormComponent {
  public constructor(
    public itemController: ItemController,
  ) {}
}
