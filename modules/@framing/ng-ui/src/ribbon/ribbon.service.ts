import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';

import { Ribbon } from './ribbon';
import { RibbonFramer } from './ribbon.framer';

import * as _ from 'lodash';

@Injectable()
export class RibbonService {

  public get ribbon$(): Observable<Ribbon> { return this.ribbonSubject; }

  private ribbonSubject: ReplaySubject<Ribbon> = new ReplaySubject<Ribbon>(1);
  private ribbon: Ribbon;

  private subscriptions: AnonymousSubscription[] = [];

  constructor(
    private router: Router,
  ) {
    this.subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onNavigationEnd();
      }
    }));
  }

  private onNavigationEnd(): void {
    this.ribbon = undefined;
    this.resolveRibbon(this.router.routerState.snapshot.root);
    this.ribbonSubject.next(_.clone(this.ribbon));
  }

  private resolveRibbon(snapshot: ActivatedRouteSnapshot, lastCollectedFrom?: RibbonFramer): void {
    if (snapshot.data && (snapshot.data as any).ribbon) {
      this.ribbon = _.clone((snapshot.data as any).ribbon as Ribbon);
      this.ribbon.routeSnapshot = snapshot;
    }
    for (let child of snapshot.children) {
      this.resolveRibbon(child, lastCollectedFrom);
    }
  }
}
