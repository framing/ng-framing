import { Component } from '@angular/core';
import { FeatureSetController } from '../feature-set.controller';

@Component({
  selector: 'feature-set',
  templateUrl: './feature-set.component.html',
})
export class FeatureSetComponent {
  constructor(
    public featureSetController: FeatureSetController,
  ) {}
}
