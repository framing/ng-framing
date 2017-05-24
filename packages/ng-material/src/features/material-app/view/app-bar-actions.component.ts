import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-actions',
  template: `
    <div>
      <button md-button *ngFor="let action of model.appBarActions" [routerLink]="action.link">
        <md-icon>{{action.icon}}</md-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarActionsComponent extends MaterialAppComponent {}
