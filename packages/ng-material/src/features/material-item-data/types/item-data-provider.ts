import { Observable } from 'rxjs';

export abstract class ItemDataProvider {
  public abstract queryItems(params: any): Observable<any>;

  public abstract getItem(id: any): Observable<any>;

  public abstract saveItem(item: any): Observable<any>;

  public abstract createItem(item: any): Observable<any>;

  public abstract updateItem(item: any): Observable<any>;

  public abstract deleteItem(item: any): Observable<any>;
}
