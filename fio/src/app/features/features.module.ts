import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureListFeature } from 'features/feature-list/feature-list.feature';

@NgModule(Framing((framing) => framing
  .frame(new FeatureListFeature()
    .model({
      featureSets: [
        {
          id: 'material',
          title: 'Material',
          features: [
            {
              id: 'app',
              title: 'App',
            },
          ],
        },
      ],
    }),
  )
  .children([
    { path: 'material', loadChildren: './material/material.module#MaterialModule' },
  ]),
))
export class FeaturesModule {}
