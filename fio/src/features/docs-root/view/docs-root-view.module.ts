import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';

import { DocsRootComponent } from './docs-root.component';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
  ])
  .declarationsAndEntryComponents([
    DocsRootComponent,
  ]),
))
export class DocsRootViewModule {}
