import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { FeatureDetailController } from './feature-detail.controller';
import { FeatureDetailModel } from './feature-detail.model';
import { FeatureDetailView } from './feature-detail.view';

import { FeatureDetailViewModule } from './view/feature-detail-view.module';
import { FeatureDetailComponent } from './view/feature-detail.component';

export class FeatureDetailFeature extends Framer<FeatureDetailModel, FeatureDetailView> {
  public get framerName(): string { return 'FeatureDetail'; }

  public get defaultModel(): FeatureDetailModel {
    return {

    };
  }

  public get defaultView(): FeatureDetailView {
    return {
      featureDetail: FeatureDetailComponent,
    };
  }

  public get defaultController(): Type<FeatureDetailController> {
    return FeatureDetailController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(FeatureDetailViewModule)
      .component(this.theView.featureDetail);
  }
}
