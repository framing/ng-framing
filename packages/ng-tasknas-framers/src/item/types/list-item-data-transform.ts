import { ListItemData } from './list-item-data';

export interface ListItemDataTransform {
  transform(itemData: any): ListItemData;
}