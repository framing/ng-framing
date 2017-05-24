import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-actions',
  templateUrl: './app-bar-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarActionsComponent extends MaterialAppComponent {}
