import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-title',
  template: `
    <md-toolbar color="accent">
      <h3 [innerHTML]="model.sideNavTitle"></h3>
    </md-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavTitleComponent extends MaterialAppComponent {}
