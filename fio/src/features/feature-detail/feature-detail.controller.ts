import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { FeatureDetailModel } from './feature-detail.model';
import { FeatureDetailView } from './feature-detail.view';

@Injectable()
export class FeatureDetailController extends Controller<FeatureDetailModel, FeatureDetailView> {

}
