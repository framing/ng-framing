import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { MaterialAppModel as M } from './material-app.model';
import { MaterialAppView as V } from './material-app.view';

@Injectable()
export class MaterialAppController extends Controller<M, V> {
  public toggleSideNav(opened: boolean): void {
    this.updateModel({
      sideNavOpened: opened,
    });
  }

  public toggleRightNav(opened: boolean): void {
    this.updateModel({
      rightNavOpened: opened,
    });
  }
}
