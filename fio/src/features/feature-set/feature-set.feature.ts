import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { FeatureSetController } from './feature-set.controller';
import { FeatureSetModel } from './feature-set.model';
import { FeatureSetView } from './feature-set.view';

import { FeatureSetViewModule } from './view/feature-set-view.module';
import { FeatureSetComponent } from './view/feature-set.component';

export class FeatureSetFeature extends Framer<FeatureSetModel, FeatureSetView> {
  public get framerName(): string { return 'FeatureSet'; }

  public get defaultModel(): FeatureSetModel {
    return {

    };
  }

  public get defaultView(): FeatureSetView {
    return {
      featureSet: FeatureSetComponent,
    };
  }

  public get defaultController(): Type<FeatureSetController> {
    return FeatureSetController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(FeatureSetViewModule)
      .child({
        path: '',
        pathMatch: 'full',
        component: this.theView.featureSet,
      });
  }
}
