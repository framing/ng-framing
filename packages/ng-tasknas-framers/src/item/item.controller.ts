import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Controller } from '@framing/ng-core';

import { ItemModel } from './item.model';
import { ItemView } from './item.view';

import { ItemDataProvider } from './types/item-data-provider';

@Injectable()
export class ItemController extends Controller<ItemModel, ItemView> {

  private itemDataProvider: ItemDataProvider;

  private router: Router;

  public onControllerInit(): void {
    this.itemDataProvider = this.injector.get(ItemDataProvider);
    this.router = this.injector.get(Router);
  }

  public beforeSaveItem(): void {}

  public listItems(): void {
    this.itemDataProvider.queryItems({}).subscribe((items) => {
      this.model.items = items;
    });
  }

  public editItem(): void {
    this.model.item = {};

    this.itemDataProvider.getItem(this.router.url.split('/')[2]).subscribe((item) => {
      this.model.item = item;
    });
  }

  public newItem(): void {
    this.model.item = {};
  }

  public createItem(): void {
    this.beforeSaveItem();

    this.itemDataProvider.createItem(this.model.item).subscribe((item: any) => {
      this.router.navigate([ this.frame.routeUrl ]);
    }, () => {
      window.alert('Error!');
    });
  }

  public updateItem(): void {
    this.beforeSaveItem();

    this.itemDataProvider.updateItem(this.model.item).subscribe((item: any) => {
      this.router.navigate([ this.frame.routeUrl ]);
    }, () => {
      window.alert('Error!');
    });
  }

  public deleteItem(): void {
    this.itemDataProvider.deleteItem(this.model.item).subscribe(() => {
      this.router.navigate([ this.frame.routeUrl ]);
    });
  }

  public cancel(): void {
    this.router.navigate([ this.frame.routeUrl ]);
  }
}
