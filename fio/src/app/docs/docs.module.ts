import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MdToolbarModule } from '@angular/material/toolbar';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';
import { MdInputModule } from '@angular/material/input';
import { MdSidenavModule } from '@angular/material/sidenav';
import { Platform } from '@angular/material/core';

// Temporary fix for MdSidenavModule issue:
// crashes with "missing first" operator when SideNav.mode is "over"
import 'rxjs/add/operator/first';

import { GaService } from 'app/shared/ga.service';
import { Logger } from 'app/shared/logger.service';
import { LocationService } from 'app/shared/location.service';
import { AutoScrollService } from 'app/shared/auto-scroll.service';

import { DocsComponent } from './docs.component';
import { ApiService } from './embedded/api/api.service';
import { DocViewerComponent } from './layout/doc-viewer/doc-viewer.component';
import { embeddedComponents, EmbeddedComponents } from './embedded';
import { NavigationService } from './navigation/navigation.service';
import { DocumentService } from './documents/document.service';
import { SearchService } from './search/search.service';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchBoxComponent } from './search/search-box/search-box.component';

@NgModule(Framing((framing) => framing
  .imports([
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
  ])
  .declarations([
    DocViewerComponent,
    TopMenuComponent,
    NavMenuComponent,
    NavItemComponent,
    SearchResultsComponent,
    SearchBoxComponent,
  ])
  .providers([
    ApiService,
    EmbeddedComponents,
    GaService,
    Logger,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    LocationService,
    NavigationService,
    DocumentService,
    SearchService,
    Platform,
    AutoScrollService,
  ])
  .declarationsAndEntryComponents(embeddedComponents)
  .route({
    path: '**', component: DocsComponent,
  })
  .declare(DocsComponent),
))
export class DocsModule {}
