import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export class MockLocationService {
  urlSubject: Subject<string> = new BehaviorSubject<string>(this.initialUrl);
  currentUrl: Observable<string> = this.urlSubject.asObservable();
  search: any = jasmine.createSpy('search').and.returnValue({});
  setSearch: any = jasmine.createSpy('setSearch');
  go: any = jasmine.createSpy('Location.go');
  handleAnchorClick: any = jasmine.createSpy('Location.handleAnchorClick')
      .and.returnValue(false); // prevent click from causing a browser navigation
  constructor(private initialUrl: string) {}
}
