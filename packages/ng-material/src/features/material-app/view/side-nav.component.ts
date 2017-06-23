import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav',
  template: `
    <ng-container [ngComponentOutlet]="view.sideNavTitle"></ng-container>

    <ng-container [ngComponentOutlet]="view.sideNavSubTitle"></ng-container>

    <ng-container [ngComponentOutlet]="view.sideNavContent"></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent extends MaterialAppComponent {}
