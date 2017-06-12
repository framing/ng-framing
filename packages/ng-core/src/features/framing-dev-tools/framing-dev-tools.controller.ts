import { Injectable } from '@angular/core';

import { FramingDevToolsModel as M } from './framing-dev-tools.model';
import { FramingDevToolsView as V } from './framing-dev-tools.view';
import { Router, NavigationEnd } from '@angular/router';
import { Controller } from '../../controller';
import { Action } from '../../action';

@Injectable()
export class FramingDevToolsController extends Controller<M, V> {

  private replayNavigation: boolean = false;

  constructor(
    private router: Router,
  ) {
    super();
  }

  public onControllerInit(): void {
    this.router.events.subscribe((event: any) => {
      this.handleRouterEvents(event);
    });

    this.markForCheck$.subscribe((data) => {
      if (this.model.snapshotUrl && this.model.snapshotUrl !== this.router.routerState.snapshot.url) {
        this.replayNavigation = true;
        this.router.navigate([ this.model.snapshotUrl ]);
      }
    }, (err) => console.error(err) );

  }

  @Action() private trackRouterState(): void {
    this.model.snapshotUrl = this.router.routerState.snapshot.url;
  }

  private handleRouterEvents(event: Event): void {
    if (event instanceof NavigationEnd) {
      if (!this.replayNavigation) {
        this.trackRouterState();
      }
      this.replayNavigation = false;
    }
  }
}
