import * as _ from 'lodash';

import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ItemDataProvider } from '../types/item-data-provider';

import { ItemController } from '../item.controller';

@Injectable()
export class ItemDataInMemoryService extends ItemDataProvider {

  public constructor(
    public itemController: ItemController,
  ) {
    super();
  }

  public queryItems(params: any): Observable<any> {
    return Observable.of(this.itemController.model.items);
  }

  public getItem(id: any): Observable<any> {
    return Observable.of(_.find(this.itemController.model.items, {id: id}));
  }

  public saveItem(item: any): Observable<any> {
    return Observable.of(item);
  }

  public createItem(item: any): Observable<any> {
    this.itemController.model.items.push(item);

    return Observable.of(item);
  }

  public updateItem(item: any): Observable<any> {
    return Observable.of(item);
  }

  public deleteItem(item: any): Observable<any> {
    _.pull(this.itemController.model.items, item);

    return Observable.of(item);
  }
}
