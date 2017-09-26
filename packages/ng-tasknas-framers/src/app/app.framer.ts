import { Type } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@framing/ng-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { AppController } from './app.controller';
import { AppModel } from './app.model';
import { AppView } from './app.view';

import { AppComponentsModule } from './components/app-components.module';

import { AppBarActionsComponent } from './components/app-bar-actions.component';
import { AppBarTitleComponent } from './components/app-bar-title.component';
import { AppBarComponent } from './components/app-bar.component';
// import { AppRightNavComponent } from './components/app-right-nav.component';
import { AppRootComponent } from './components/app-root.component';
import { AppSideNavContentComponent } from './components/app-side-nav-content.component';
import { AppSideNavSubTitleComponent } from './components/app-side-nav-sub-title.component';
import { AppSideNavTitleComponent } from './components/app-side-nav-title.component';
import { AppSideNavComponent } from './components/app-side-nav.component';

export class AppFramer extends Framer<AppModel, AppView> {

  public get framerName(): string { return 'App'; }

  public get defaultModel(): AppModel {
    return {
      appBarActions: [],
      isRoot: true,
      rightNavItems: [],
      rightNavOpened: false,
      sideNavOpened: true,
      title: '',
    };
  }

  public get defaultView(): AppView {
    return {
      appBarActionsComponent: AppBarActionsComponent,
      appBarTitleComponent: AppBarTitleComponent,
      appBarComponent: AppBarComponent,
      appRootComponent: AppRootComponent,
      // rightNavComponent: AppRightNavComponent,
      sideNavComponent: AppSideNavComponent,
      sideNavContentComponent: AppSideNavContentComponent,
      sideNavSubTitleComponent: AppSideNavSubTitleComponent,
      sideNavTitleComponent: AppSideNavTitleComponent,
    };
  }

  public get defaultController(): Type<AppController> { return AppController; }

  public frame(framing: FramingNgModule): void {
    framing
      .root()
      .component(this.theView.appRootComponent)
      .imports([
        FlexLayoutModule,
        MaterialModule,
        RouterModule,
        AppComponentsModule,
        BrowserAnimationsModule,
      ]);
  }
}
