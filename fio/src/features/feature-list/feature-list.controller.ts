import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { FeatureListModel } from './feature-list.model';
import { FeatureListView } from './feature-list.view';

@Injectable()
export class FeatureListController extends Controller<FeatureListModel, FeatureListView> {

}
