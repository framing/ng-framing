import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';

import { AppBarActionsComponent } from './app-bar-actions.component';
import { AppBarTitleComponent } from './app-bar-title.component';
import { AppBarComponent } from './app-bar.component';
import { AppRightNavComponent } from './app-right-nav.component';
import { AppRootComponent } from './app-root.component';
import { AppSideNavContentComponent } from './app-side-nav-content.component';
import { AppSideNavSubTitleComponent } from './app-side-nav-sub-title.component';
import { AppSideNavTitleComponent } from './app-side-nav-title.component';
import { AppSideNavComponent } from './app-side-nav.component';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
  ])
  .declarations([
    AppRootComponent,
  ])
  .declarationsAndEntryComponents([
    AppBarActionsComponent,
    AppBarTitleComponent,
    AppBarComponent,
    AppRightNavComponent,
    AppSideNavContentComponent,
    AppSideNavSubTitleComponent,
    AppSideNavTitleComponent,
    AppSideNavComponent,
  ]),
))
export class AppComponentsModule {}
