import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-title',
  templateUrl: './side-nav-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavTitleComponent extends MaterialAppComponent {}
