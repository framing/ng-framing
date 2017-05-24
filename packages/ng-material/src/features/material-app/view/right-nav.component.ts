import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'right-nav',
  templateUrl: './right-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightNavComponent extends MaterialAppComponent {}
