import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { MaterialAppModel } from './material-app.model';
import { MaterialAppView } from './material-app.view';

@Injectable()
export class MaterialAppController extends Controller<MaterialAppModel, MaterialAppView> {
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
