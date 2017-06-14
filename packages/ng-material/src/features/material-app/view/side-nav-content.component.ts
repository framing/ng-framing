import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-content',
  template: `
    <div fxLayoutPadding>
      <md-list>
        <span *ngFor="let item of model.sideNavItems">
          <md-list-item *ngIf="!item.isSubheader; else elseBlock" [routerLink]="item.routerLink">
            <md-icon *ngIf="item.icon">{{item.icon}}</md-icon>
            <p>{{item.label}}</p>
          </md-list-item>
          <ng-template #elseBlock>
            <h3 mg-subheader>
              <md-icon *ngIf="item.icon">{{item.icon}}</md-icon>
              <p>{{item.label}}</p>
            </h3>
          </ng-template>
        </span>
      </md-list>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavContentComponent extends MaterialAppComponent {}
