import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureDetailFeature } from 'features/feature-detail/feature-detail.feature';

@NgModule(Framing((framing) => framing
  .frame(new FeatureDetailFeature()
    .model({
      feature: {
        id: 'app',
        title: 'App',
      },
    })),
))
export class AppModule {}
