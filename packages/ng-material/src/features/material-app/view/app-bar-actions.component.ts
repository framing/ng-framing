import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-actions',
  template: `
    <div>
      <button 
        mat-icon-button
        [matTooltip]="action.label"
        *ngFor="let action of model.appBarActions"
        [routerLink]="action.routerLink"
        (click)="controller.actionClicked(action)">
        <mat-icon>{{ action.icon }}</mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarActionsComponent extends MaterialAppComponent {}
