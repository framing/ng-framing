import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureSetFeature } from 'features/feature-set/feature-set.feature';

@NgModule(Framing((framing) => framing
  .frame(new FeatureSetFeature()
    .model({
      featureSet: {
        id: 'material',
        title: 'Material',
        features: [
          {
            id: 'app',
            title: 'App',
          },
        ],
      },
    }),
  )
  .children([
    { path: 'app', loadChildren: './app/app.module#AppModule' },
  ]),
))
export class MaterialModule {}
