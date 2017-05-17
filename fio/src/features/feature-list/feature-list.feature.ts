import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { FeatureListController } from './feature-list.controller';
import { FeatureListModel } from './feature-list.model';
import { FeatureListView } from './feature-list.view';

import { FeatureListViewModule } from './view/feature-list-view.module';
import { FeatureListComponent } from './view/feature-list.component';

export class FeatureListFeature extends Framer<FeatureListModel, FeatureListView> {
  public get framerName(): string { return 'FeatureList'; }

  public get defaultModel(): FeatureListModel {
    return {

    };
  }

  public get defaultView(): FeatureListView {
    return {
      featureList: FeatureListComponent,
    };
  }

  public get defaultController(): Type<FeatureListController> {
    return FeatureListController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(FeatureListViewModule)
      .child({
        path: '',
        pathMatch: 'full',
        component: this.theView.featureList,
      });
  }
}
