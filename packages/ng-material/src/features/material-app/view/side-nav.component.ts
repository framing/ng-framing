import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav',
  template: `
    <md-toolbar>
      <ng-container [ngComponentOutlet]="view.sideNavTitle"></ng-container>
    </md-toolbar>

    <ng-container [ngComponentOutlet]="view.sideNavSubTitle"></ng-container>

    <div fxLayoutPadding>
      <ng-container [ngComponentOutlet]="view.sideNavContent"></ng-container>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent extends MaterialAppComponent {}
