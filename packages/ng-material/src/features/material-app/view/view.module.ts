import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppBarActionsComponent } from './app-bar-actions.component';
import { AppBarTitleComponent } from './app-bar-title.component';
import { AppBarComponent } from './app-bar.component';
import { AppRootComponent } from './app-root.component';
import { RightNavComponent } from './right-nav.component';
import { SideNavContentComponent } from './side-nav-content.component';
import { SideNavSubTitleComponent } from './side-nav-sub-title.component';
import { SideNavTitleComponent } from './side-nav-title.component';
import { SideNavComponent } from './side-nav.component';

@NgModule(Framing((framing) => framing
  .imports([
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
  ])
  .declarationsAndEntryComponents([
    AppBarActionsComponent,
    AppBarTitleComponent,
    AppBarComponent,
    AppRootComponent,
    RightNavComponent,
    SideNavContentComponent,
    SideNavSubTitleComponent,
    SideNavTitleComponent,
    SideNavComponent,
  ]),
))
export class MaterialAppViewModule {}
