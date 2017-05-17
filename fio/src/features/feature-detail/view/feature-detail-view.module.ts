import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Framing } from '@framing/ng-core';

import { FeatureDetailComponent } from './feature-detail.component';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
  ])
  .declarationsAndEntryComponents([
    FeatureDetailComponent,
  ]),
))
export class FeatureDetailViewModule {}
