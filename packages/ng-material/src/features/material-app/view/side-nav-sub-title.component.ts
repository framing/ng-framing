import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-sub-title',
  templateUrl: './side-nav-sub-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavSubTitleComponent extends MaterialAppComponent {}
