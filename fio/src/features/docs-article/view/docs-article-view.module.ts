import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { Framing } from '@framing/ng-core';

import { DocsArticleComponent } from './docs-article.component';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
    MaterialModule,
  ])
  .declarationsAndEntryComponents([
    DocsArticleComponent,
  ]),
))
export class DocsArticleViewModule {}
