import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureListComponent } from './feature-list.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    FeatureListComponent,
  ]),
))
export class FeatureListViewModule {}
