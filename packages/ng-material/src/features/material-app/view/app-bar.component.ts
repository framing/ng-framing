import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: [ './app-bar.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent extends MaterialAppComponent {}
