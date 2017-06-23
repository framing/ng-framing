import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Controller } from '@framing/ng-core';

import { MaterialItemDataModel as M } from './material-item-data.model';
import { MaterialItemDataView as V } from './material-item-data.view';

import { ItemDataProvider } from './types/item-data-provider';

@Injectable()
export class MaterialItemDataController extends Controller<M, V> {

  private itemDataProvider: ItemDataProvider;

  private router: Router;

  onControllerInit(): void {
    this.itemDataProvider = this.injector.get(ItemDataProvider);
    this.router = this.injector.get(Router);
  }

  beforeSaveItem(): void {}

  @Action() listItems(): void {
    this.itemDataProvider.queryItems({}).subscribe((items) => this.listItemsSuccess(items));
  }

  @Action() listItemsSuccess(items: any[]): void {
    this.model.items = items;
  }

  @Action() editItem(): void {
    this.model.item = {};

    this.itemDataProvider.getItem(this.router.url.split('/')[2]).subscribe(
      (item) => this.getItemSuccess(item),
    );
  }

  @Action() getItemSuccess(item: any): void {
    this.model.item = item;
  }

  @Action() newItem(): void {
    this.model.item = {};
  }

  @Action() createItem(): void {
    this.beforeSaveItem();

    this.itemDataProvider.createItem(this.model.item).subscribe(
      (item: any) => this.createItemSuccess(item),
      () => { window.alert('Error!'); }
    );
  }

  @Action() createItemSuccess(item: any): void {
    this.model.item = {};

    this.router.navigate([ this.frame.routeUrl ]);
  }

  @Action() updateItem(): void {
    this.beforeSaveItem();

    this.itemDataProvider.updateItem(this.model.item).subscribe(
      (item: any) => this.updateItemSuccess(item),
      () => { window.alert('Error!'); },
    );
  }

  @Action() updateItemSuccess(item: any): void {
    this.router.navigate([ this.frame.routeUrl ]);
  }

  @Action() deleteItem(): void {
    this.itemDataProvider.deleteItem(this.model.item).subscribe(
      () => this.deleteItemSuccess(),
    );
  }

  @Action() deleteItemSuccess(): void {
    this.router.navigate([ this.frame.routeUrl ]);
  }

  @Action() cancel(): void {
    this.router.navigate([ this.frame.routeUrl ]);
  }
}
