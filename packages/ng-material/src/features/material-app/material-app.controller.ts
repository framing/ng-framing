import { Injectable } from '@angular/core';
import { Controller, Action } from '@framing/ng-core';

import { MaterialAppModel as M } from './material-app.model';
import { MaterialAppView as V } from './material-app.view';

@Injectable()
export class MaterialAppController extends Controller<M, V> {
  @Action() public toggleSideNav(opened: boolean): void {
    this.model.sideNavOpened = opened;
  }

  @Action() public toggleRightNav(opened: boolean): void {
    this.model.rightNavOpened = opened;
  }
}
