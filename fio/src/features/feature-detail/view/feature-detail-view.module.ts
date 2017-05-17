import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureDetailComponent } from './feature-detail.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    FeatureDetailComponent,
  ]),
))
export class FeatureDetailViewModule {}
