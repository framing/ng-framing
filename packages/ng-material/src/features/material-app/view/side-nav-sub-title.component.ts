import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-sub-title',
  template: `
    <div></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavSubTitleComponent extends MaterialAppComponent {}
