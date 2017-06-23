import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'logout',
  template: `
    <h1 md-dialog-title>Logout</h1>

    <div md-dialog-content>
      <div>Are you sure you want to logout?</div>
    </div>

    <div md-dialog-actions>
      <button
        md-button
        (click)="controller.logoutSubmit()">
        OK
      </button>

      <button
        md-button
        (click)="controller.logoutCancel()">
        Cancel
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent extends MaterialSecurityComponent {}
