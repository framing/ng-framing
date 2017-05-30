import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-title',
  template: `
    <h2>
      <span [innerHTML]="model.appBarTitle"></span>
    </h2>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarTitleComponent extends MaterialAppComponent {}
