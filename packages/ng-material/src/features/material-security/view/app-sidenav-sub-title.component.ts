import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'app-sidenav-sub-title',
  template: `
    <md-toolbar color="accent">
    <div *ngIf="model.user" fxFill fxLayout="row">
      <h5 fxFlex="100%">{{ model.user.username }}</h5>

      <button
        md-icon-button
        (click)="controller.logout()">
        <md-icon>exit_to_app</md-icon>
      </button>
    </div>
  </md-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidenavSubTitleComponent extends MaterialSecurityComponent { }
