import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ItemDataProvider } from '../types/item-data-provider';

import { ItemModel } from '../item.model';

@Injectable()
export class ItemDataFirebaseService extends ItemDataProvider {

  private items: FirebaseListObservable<any>;

  public constructor(
    @Inject('itemModel') public itemModel: ItemModel,
    public af: AngularFire,
  ) {
    super();
  }

  public queryItems(params: any): Observable<any> {
    return this.getItems();
  }

  public getItem(id: any): Observable<any> {
    return this.af.database.object('/' + this.itemModel.endpoint + '/' + id);
  }

  public saveItem(item: any): Observable<any> {
    return item.$key ? this.updateItem(item) : this.createItem(item);
  }

  public createItem(item: any): Observable<any> {
    return Observable.fromPromise((this.getItems().push(item) as any) as Promise<any>);
  }

  public updateItem(item: any): Observable<any> {
    return Observable.fromPromise(this.getItems().update(item.$key, item) as Promise<any>);
  }

  public deleteItem(item: any): Observable<any> {
    return Observable.fromPromise(this.getItems().remove(item.$key) as Promise<any>);
  }

  private getItems(): FirebaseListObservable<any> {
    if (! this.items) {
      this.items = this.af.database.list(this.itemModel.endpoint);
    }

    return this.items;
  }
}
