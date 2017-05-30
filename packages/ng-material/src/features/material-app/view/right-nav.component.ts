import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'right-nav',
  template: `
    <md-list (click)="controller.toggleRightNav(false)">
      <md-list-item *ngFor="let item of model.rightNavItems" [routerLink]="item.link">
        <md-icon>{{item.icon}}</md-icon>
        <p>{{item.label}}</p>
      </md-list-item>
    </md-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightNavComponent extends MaterialAppComponent {}
