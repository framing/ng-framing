import { Type } from '@angular/core';

export class ItemViewData {
  itemDeleteComponent?: Type<any>;

  itemEditComponent?: Type<any>;

  itemListComponent?: Type<any>;

  itemComponent?: Type<any>;

  itemNewComponent?: Type<any>;

  itemEditFormComponent?: Type<any>;

  itemFormComponent?: Type<any>;

  itemNewFormComponent?: Type<any>;
}

export class ItemView extends ItemViewData {}
