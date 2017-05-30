import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-title',
  template: `
    <div class="md-toolbar-tools">
      <h3 [innerHTML]="model.sideNavTitle"></h3>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavTitleComponent extends MaterialAppComponent {}
