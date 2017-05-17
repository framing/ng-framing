import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureSetComponent } from './feature-set.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    FeatureSetComponent,
  ]),
))
export class FeatureSetViewModule {}
