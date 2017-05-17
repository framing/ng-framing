import { Component } from '@angular/core';
import { FeatureDetailController } from '../feature-detail.controller';
import { FeatureSetController } from '../../feature-set/feature-set.controller';

@Component({
  selector: 'feature-detail',
  templateUrl: './feature-detail.component.html',
})
export class FeatureDetailComponent {
  constructor(
    public featureSetController: FeatureSetController,
    public featureDetailController: FeatureDetailController,
  ) {}
}
