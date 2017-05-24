import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-title',
  templateUrl: './app-bar-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarTitleComponent extends MaterialAppComponent {}
