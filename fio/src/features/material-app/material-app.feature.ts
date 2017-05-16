import { Type } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialAppController } from './material-app.controller';
import { MaterialAppModel } from './material-app.model';
import { MaterialAppView } from './material-app.view';

import { MaterialAppViewModule } from './view/material-app-view.module';

import { AppBarActionsComponent } from './view/app-bar-actions.component';
import { AppBarTitleComponent } from './view/app-bar-title.component';
import { AppBarComponent } from './view/app-bar.component';
import { AppRightNavComponent } from './view/app-right-nav.component';
import { AppRootComponent } from './view/app-root.component';
import { AppSideNavContentComponent } from './view/app-side-nav-content.component';
import { AppSideNavSubTitleComponent } from './view/app-side-nav-sub-title.component';
import { AppSideNavTitleComponent } from './view/app-side-nav-title.component';
import { AppSideNavComponent } from './view/app-side-nav.component';

export class MaterialAppFeature extends Framer<MaterialAppModel, MaterialAppView> {

  public get framerName(): string { return 'App'; }

  public get defaultModel(): MaterialAppModel {
    return {
      appBarActions: [],
      isRoot: true,
      rightNavItems: [],
      rightNavOpened: false,
      sideNavOpened: true,
      sideNavTitle: '',
    };
  }

  public get defaultView(): MaterialAppView {
    return {
      appBarActions: AppBarActionsComponent,
      appBarTitle: AppBarTitleComponent,
      appBar: AppBarComponent,
      appRoot: AppRootComponent,
      rightNav: AppRightNavComponent,
      sideNav: AppSideNavComponent,
      sideNavContent: AppSideNavContentComponent,
      sideNavSubTitle: AppSideNavSubTitleComponent,
      sideNavTitle: AppSideNavTitleComponent,
    };
  }

  public get defaultController(): Type<MaterialAppController> { return MaterialAppController; }

  public frame(framing: FramingNgModule): void {
    framing
      .component(this.theView.appRoot)
      .imports([
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
        MaterialAppViewModule,
      ]);
  }
}
