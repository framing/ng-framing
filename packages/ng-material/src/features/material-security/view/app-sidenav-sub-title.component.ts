import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'app-sidenav-sub-title',
  template: `
    <md-toolbar *ngIf="model.user">
      <div fxFlex="100%">{{ model.user.username }}</div>

      <button
        color="accent"
        md-icon-button
        (click)="controller.logout()">
        <md-icon>exit_to_app</md-icon>
      </button>
    </md-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidenavSubTitleComponent extends MaterialSecurityComponent { }
