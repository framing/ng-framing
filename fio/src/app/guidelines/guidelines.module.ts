import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsRootFeature } from 'features/docs-root/docs-root.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsRootFeature())
  .children([
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
  ]),
))
export class GuidelinesModule {}
