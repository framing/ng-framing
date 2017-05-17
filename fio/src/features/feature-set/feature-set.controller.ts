import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { FeatureSetModel } from './feature-set.model';
import { FeatureSetView } from './feature-set.view';

@Injectable()
export class FeatureSetController extends Controller<FeatureSetModel, FeatureSetView> {

}
