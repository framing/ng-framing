import { Type } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialItemDataController as C } from './material-item-data.controller';
import { MaterialItemDataModel as M } from './material-item-data.model';
import { MaterialItemDataView as V } from './material-item-data.view';

import { ItemDataProvider } from './types/item-data-provider';
import { ListItemDataTransform } from './types/list-item-data-transform';

import { ItemDataInMemoryService } from './shared/item-data-in-memory.service';
import { ListItemDataTransformService } from './shared/list-item-data-transform.service';
import { MaterialItemDataSharedModule } from './shared/shared.module';

import { ItemDeleteComponent } from './view/item-delete.component';
import { ItemEditComponent } from './view/item-edit.component';
import { ItemFormComponent } from './view/item-form.component';
import { ItemListComponent } from './view/item-list.component';
import { ItemNewComponent } from './view/item-new.component';
import { ItemComponent } from './view/item.component';
import { MaterialItemDataViewModule } from './view/view.module';

export class MaterialItemDataFeature extends Framer<M, V> {

  private _itemDataProvider: Type<ItemDataProvider> = ItemDataInMemoryService;

  private _listItemDataTransform?: Type<ListItemDataTransform> = ListItemDataTransformService;

  public itemDataProvider(p: Type<ItemDataProvider>): MaterialItemDataFeature {
    this._itemDataProvider = p;

    return this;
  }

  public listItemDataTransform(t: Type<ListItemDataTransform>): MaterialItemDataFeature {
    this._listItemDataTransform = t;

    return this;
  }

  public get defaultModel(): M {
    return {
      endpoint: null,
      itemDataLabelField: 'label',
      itemDataIconField: 'icon',
      items: [],
      item: {},
    };
  }

  public get defaultView(): V {
    return {
      itemList: ItemListComponent,
      item: ItemComponent,
      itemNew: ItemNewComponent,
      itemEdit: ItemEditComponent,
      itemForm: ItemFormComponent,
      itemDelete: ItemDeleteComponent,
    };
  }

  public frame(framing: FramingNgModule): void {
    framing
      .children([
        { path: '', redirectTo: 'list' },
        { path: 'list', component: this.theView.itemList },
        { path: 'new', component: this.theView.itemNew },
        {
          path: ':id',
          component: this.theView.itemEdit,
          children: [
            { path: 'delete', component: this.theView.itemDelete },
          ],
        },
      ])
      .provide({
        provide: ItemDataProvider,
        useClass: this._itemDataProvider,
      })
      .imports([
        MaterialModule,
        RouterModule,
        MaterialItemDataSharedModule,
        MaterialItemDataViewModule,
      ]);
  }

  public get defaultController(): Type<C> { return C; }

  public get framerName(): string { return 'MaterialItemData'; }
}
