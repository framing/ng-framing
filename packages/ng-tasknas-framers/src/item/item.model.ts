import { Type } from '@angular/core';

import { ListItemDataTransform } from './types/list-item-data-transform';

export interface ItemModel {
  name?: string;

  endpoint?: string;

  listItemDataTransform?: Type<ListItemDataTransform>;

  itemDataLabelField?: string;

  itemDataIconField?: string;

  items?: any[];

  item?: any;
}
