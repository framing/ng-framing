import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Controller } from '@framing/ng-core';

import { MaterialAppModel } from './material-app.model';
import { MaterialAppView } from './material-app.view';

@Injectable()
export class MaterialAppController extends Controller<MaterialAppModel, MaterialAppView> {
  protected router: Router;

  public onControllerInit(): void {
    this.router = this.injector.get(Router);
  }

  public toggleSideNav(opened: boolean): void {
    this.model.sideNavOpened = opened;
  }

  public toggleRightNav(opened: boolean): void {
    this.model.rightNavOpened = opened;
  }
}
