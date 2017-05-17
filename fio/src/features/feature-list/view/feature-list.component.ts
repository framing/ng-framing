import { Component } from '@angular/core';
import { FeatureListController } from '../feature-list.controller';

@Component({
  selector: 'feature-list',
  templateUrl: './feature-list.component.html',
})
export class FeatureListComponent {
  constructor(
    public featureListController: FeatureListController,
  ) {}
}
