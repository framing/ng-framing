import { Type } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialAppController } from './material-app.controller';
import { MaterialAppModel } from './material-app.model';
import { MaterialAppView } from './material-app.view';

import { AppBarActionsComponent } from './view/app-bar-actions.component';
import { AppBarTitleComponent } from './view/app-bar-title.component';
import { AppBarComponent } from './view/app-bar.component';
import { AppRootComponent } from './view/app-root.component';
import { RightNavComponent } from './view/right-nav.component';
import { SideNavContentComponent } from './view/side-nav-content.component';
import { SideNavSubTitleComponent } from './view/side-nav-sub-title.component';
import { SideNavTitleComponent } from './view/side-nav-title.component';
import { SideNavComponent } from './view/side-nav.component';
import { MaterialAppViewModule } from './view/view.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export class MaterialAppFeature extends Framer<MaterialAppModel, MaterialAppView> {

  public get framerName(): string { return 'MaterialApp'; }

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
      rightNav: RightNavComponent,
      sideNav: SideNavComponent,
      sideNavContent: SideNavContentComponent,
      sideNavSubTitle: SideNavSubTitleComponent,
      sideNavTitle: SideNavTitleComponent,
    };
  }

  public get defaultController(): Type<MaterialAppController> { return MaterialAppController; }

  public frame(framing: FramingNgModule): void {
    framing
      .root(this.theView.appRoot)
      .imports([
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule,
        MaterialAppViewModule,
      ]);
  }
}
