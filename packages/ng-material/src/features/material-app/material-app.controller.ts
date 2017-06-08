import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { Controller, Action } from '@framing/ng-core';

import { MaterialAppModel as M } from './material-app.model';
import { MaterialAppView as V } from './material-app.view';

import { AppNavItem } from './types/app-nav-item';

@Injectable()
export class MaterialAppController extends Controller<M, V> {

  // ========================================
  // nav actions
  // ========================================

  @Action() toggleSideNav(opened: boolean): void {
    this.model.sideNavOpened = opened;
  }

  @Action() toggleRightNav(opened: boolean): void {
    this.model.rightNavOpened = opened;
  }

  // ========================================
  // app bar actions
  // ========================================

  @Action() actionClicked(navItem: AppNavItem): void {
    if (navItem.action) {
      navItem.action();
    }
  }

  @Action() addAppBarAction(action: AppNavItem): void {
    if (this.model.appBarActions) {
      this.model.appBarActions.push(action);
    } else {
      this.model.appBarActions = [ action ];
    }
  }

  @Action() removeAppBarAction(action: AppNavItem): void {
    if (this.model.appBarActions) {
      _.pull(this.model.appBarActions, action);
    }
  }

  @Action() replaceAppBarAction(oldAction: AppNavItem, newAction: AppNavItem): void {
    if (this.model.appBarActions) {
      let idx = this.model.appBarActions.indexOf(oldAction);

      if (idx !== -1) {
        this.model.appBarActions.splice(idx, 1, newAction);
      }
    }
  }
}
