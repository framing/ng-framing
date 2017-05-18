import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Framing } from '@framing/ng-core';
import { DisqusModule } from 'ng2-awesome-disqus';

import { FeatureDetailComponent } from './feature-detail.component';

@NgModule(Framing((framing) => framing
  .imports([
    DisqusModule,
    FlexLayoutModule,
  ])
  .declarationsAndEntryComponents([
    FeatureDetailComponent,
  ]),
))
export class FeatureDetailViewModule {}
