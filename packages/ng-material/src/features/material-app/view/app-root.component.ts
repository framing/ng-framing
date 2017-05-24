import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: [ './app-root.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppRootComponent extends MaterialAppComponent {}
