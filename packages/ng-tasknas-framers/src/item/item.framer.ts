import { Type } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { SharedModule } from './shared/shared.module';

import { ItemController } from './item.controller';
import { ItemModel } from './item.model';
import { ItemView } from './item.view';

import { ItemDataProvider } from './types/item-data-provider';

import { ItemDataRestService } from './shared/item-data-rest.service';
import { ListItemDataTransformService } from './shared/list-item-data-transform.service';

import { ItemComponentsModule } from './components/item-components.module';

import { ItemDeleteComponent } from './components/item-delete.component';
import { ItemEditComponent } from './components/item-edit.component';
import { ItemFormComponent } from './components/item-form.component';
import { ItemListComponent } from './components/item-list.component';
import { ItemNewComponent } from './components/item-new.component';
import { ItemComponent } from './components/item.component';

import * as _ from 'lodash';

export class ItemFramer extends Framer<ItemModel, ItemView> {

  private _itemDataProvider: Type<ItemDataProvider> = ItemDataRestService;

  public itemDataProvider(p: Type<ItemDataProvider>): ItemFramer {
    this._itemDataProvider = p;
    return this;
  }

  public get framerName(): string { return 'Item'; }

  public get defaultModel(): ItemModel {
    return {
      endpoint: null,
      listItemDataTransform: ListItemDataTransformService,
      itemDataLabelField: 'label',
      itemDataIconField: 'icon',
      items: [],
      item: {},
    };
  }

  public get defaultView(): ItemView {
    return {
      itemListComponent: ItemListComponent,
      itemComponent: ItemComponent,
      itemNewComponent: ItemNewComponent,
      itemEditComponent: ItemEditComponent,
      itemFormComponent: ItemFormComponent,
      itemDeleteComponent: ItemDeleteComponent,
    };
  }

  public get defaultController(): Type<ItemController> { return ItemController; }

  public frame(framing: FramingNgModule): void {
    framing
      .children([
        { path: '', redirectTo: 'list' },
        { path: 'list', component: this.theView.itemListComponent },
        { path: 'new', component: this.theView.itemNewComponent },
        {
          path: ':id',
          component: this.theView.itemEditComponent,
          children: [
            { path: 'delete', component: this.theView.itemDeleteComponent },
          ],
        },
      ])
      .provide({
        provide: ItemDataProvider,
        useClass: this._itemDataProvider })
      .imports([
        MaterialModule,
        RouterModule,
        ItemComponentsModule,
        SharedModule,
      ]);
  }
}
