import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ItemDataProvider } from '../types/item-data-provider';

import { MaterialItemDataController } from '../material-item-data.controller';

@Injectable()
export class ItemDataInMemoryService extends ItemDataProvider {

  private lastKey: number = 0;

  public constructor(
    public itemController: MaterialItemDataController,
  ) {
    super();
  }

  public queryItems(params: any): Observable<any> {
    return Observable.of(this.itemController.model.items);
  }

  public getItem(id: any): Observable<any> {
    return Observable.of(_.find(this.itemController.model.items, {$key: id}));
  }

  public saveItem(item: any): Observable<any> {
    return Observable.of(item);
  }

  public createItem(item: any): Observable<any> {
    item.$key = String(++this.lastKey);

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
