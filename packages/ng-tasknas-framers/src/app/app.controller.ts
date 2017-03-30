import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Controller } from '@framing/ng-core';

import { AppModel } from './app.model';
import { AppView } from './app.view';

@Injectable()
export class AppController extends Controller<AppModel, AppView> {

  public router: Router;

  public onControllerInit(): void {
    this.router = this.injector.get(Router);
  }

  public toggleSideNav(opened: boolean): void {
    this.model.sideNavOpened = opened;
  }

  public toggleRightNav(opened: boolean): void {
    this.model.rightNavOpened = opened;
  }

  public goBack(): void {
    this.router.navigate([ '../' ]);
  }

  public logout(): void {
  }
}
