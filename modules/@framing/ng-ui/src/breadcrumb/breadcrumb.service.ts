import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';

import { Breadcrumb } from './breadcrumb';
import { BreadcrumbFactoryInjector } from './breadcrumb.model';

import * as _ from 'lodash';

@Injectable()
export class BreadcrumbService {

  public breadcrumbs$: ReplaySubject<Breadcrumb[]> = new ReplaySubject<Breadcrumb[]>(1);

  private subscriptions: AnonymousSubscription[] = [];

  private breadcrumbs: BreadcrumbHolder[] = [];

  constructor(
    private router: Router,
  ) {
    this.subscriptions.push(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.disposeBreadcrumbs();
        this.collectBreadcrumbs(this.router.routerState.snapshot.root);
        this.emitBreadcrumbs();
      }
    }));
  }

  private emitBreadcrumbs(): void {
    this.breadcrumbs$.next(this.breadcrumbs.map((breadcrumb) => breadcrumb.breadcrumb));
  }

  private disposeBreadcrumbs(): void {
    this.breadcrumbs.forEach((breadcrumb) => {
      if (breadcrumb.subscription) { breadcrumb.subscription.unsubscribe(); }
    });
    this.breadcrumbs = [];
  }

  private collectBreadcrumbs(snapshot: ActivatedRouteSnapshot, lastCollected?: Breadcrumb | BreadcrumbFactoryInjector): void {
    if (snapshot.data && (snapshot.data as any).breadcrumb) {
      const breadcrumbData: Breadcrumb | BreadcrumbFactoryInjector = (snapshot.data as any).breadcrumb;
      if (breadcrumbData !== lastCollected) {
        let breadcrumbHolder: BreadcrumbHolder = { breadcrumb: { label: '' } };
        if ((breadcrumbData as Breadcrumb).label) {
          // plain old breadcrumb
          breadcrumbHolder = { breadcrumb: breadcrumbData as Breadcrumb };
        } else {
          // breadcrumb factory
          const breadcrumbFactoryInjector = breadcrumbData as BreadcrumbFactoryInjector;
          const breadcrumbFactory = breadcrumbFactoryInjector.get();
          const breadcrumbResult = breadcrumbFactory ? breadcrumbFactory.breadcrumb() : undefined;
          if (!breadcrumbFactory || !breadcrumbResult) {
            console.error('Failed to get breadcrumb factory result', { breadcrumbData });
          } else if ((breadcrumbResult as Breadcrumb).label) {
            // plain old breadcrumb
            breadcrumbHolder = { breadcrumb: breadcrumbResult as Breadcrumb };
          } else if ((breadcrumbResult as Observable<Breadcrumb>).subscribe) {
            // observable breadcrumb
            breadcrumbHolder.subscription = (breadcrumbResult as Observable<Breadcrumb>).subscribe((breadcrumb) => {
              if (!_.isEqual(breadcrumb, breadcrumbHolder.breadcrumb)) {
                breadcrumbHolder.breadcrumb = breadcrumb;
                this.emitBreadcrumbs();
              }
            });
          } else if ((breadcrumbResult as Promise<Breadcrumb>).then) {
            // promise breadcrumb
            (breadcrumbResult as Promise<Breadcrumb>).then((breadcrumb) => {
              if (!_.isEqual(breadcrumb, breadcrumbHolder.breadcrumb)) {
                breadcrumbHolder.breadcrumb = breadcrumb;
                this.emitBreadcrumbs();
              }
            });
          } else {
            console.error('Unrecognized breadcrumb data', { breadcrumbData, snapshot });
          }
        }
        this.breadcrumbs.push(breadcrumbHolder);
        /* tslint:disable:no-param-reassign */
        lastCollected = breadcrumbData;
        /* tslint:enable:no-param-reassign */
      }
    }
    for (let child of snapshot.children) {
      this.collectBreadcrumbs(child, lastCollected);
    }
  }
}

class BreadcrumbHolder {
  public breadcrumb: Breadcrumb;
  public subscription?: AnonymousSubscription;
}
