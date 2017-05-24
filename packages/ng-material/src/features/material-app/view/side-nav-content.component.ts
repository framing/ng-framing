import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-content',
  templateUrl: './side-nav-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavContentComponent extends MaterialAppComponent {}
