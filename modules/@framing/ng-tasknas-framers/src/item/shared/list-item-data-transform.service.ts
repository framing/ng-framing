import { Injectable } from '@angular/core';

import { ItemController } from '../item.controller';

import { ListItemData } from '../types/list-item-data';

@Injectable()
export class ListItemDataTransformService {
  public constructor(
    private itemController: ItemController,
  ) {}

  public transform(itemData: any): ListItemData {
    return {
      label: itemData[this.itemController.model.itemDataLabelField],
      icon: itemData[this.itemController.model.itemDataIconField],
    };
  }
}
