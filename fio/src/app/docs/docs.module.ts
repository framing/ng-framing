import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MdToolbarModule } from '@angular/material/toolbar';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';
import { MdInputModule } from '@angular/material/input';
import { MdSidenavModule } from '@angular/material/sidenav';
import { MdTabsModule } from '@angular/material';
import { Platform } from '@angular/material/core';

// Temporary fix for MdSidenavModule issue:
// crashes with "missing first" operator when SideNav.mode is "over"
import 'rxjs/add/operator/first';

import { GaService } from 'app/shared/ga.service';
import { Logger } from 'app/shared/logger.service';
import { LocationService } from 'app/shared/location.service';
import { AutoScrollService } from 'app/shared/auto-scroll.service';

import { SwUpdatesModule } from './sw-updates/sw-updates.module';
import { DocsComponent } from './docs.component';
import { ApiService } from './embedded/api/api.service';
import { DocViewerComponent } from './layout/doc-viewer/doc-viewer.component';
import { DtComponent } from './layout/doc-viewer/dt.component';
import { EmbeddedModule } from './embedded/embedded.module';
import { NavigationService } from './navigation/navigation.service';
import { DocumentService } from './documents/document.service';
import { SearchService } from './search/search.service';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { NavItemComponent } from './layout/nav-item/nav-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchBoxComponent } from './search/search-box/search-box.component';

@NgModule(Framing((framing) => framing
  .imports([
    EmbeddedModule,
    // BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    SwUpdatesModule,
  ])
  .declarations([
    DocViewerComponent,
    DtComponent,
    FooterComponent,
    TopMenuComponent,
    NavMenuComponent,
    NavItemComponent,
    SearchResultsComponent,
    SearchBoxComponent,
  ])
  .providers([
    ApiService,
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
  .route({
    path: '**', component: DocsComponent,
  })
  .declare(DocsComponent),
))
export class DocsModule {}
