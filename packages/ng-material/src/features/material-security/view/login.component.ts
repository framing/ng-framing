import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'login',
  template: `
    <form (submit)="controller.loginSubmit()">
      <h1 md-dialog-title>Login</h1>

      <div md-dialog-content fxLayout="column">
        <p *ngIf="model.loginError"
          style="color: red; font-weight: bold; text-align: center">
          Incorrect username or password
        </p>

        <div fxLayout="row">
          <md-input-container>
            <input mdInput name="username" [(ngModel)]="model.login.username" placeholder="Username" required>
          </md-input-container>

          <md-input-container>
            <input mdInput name="password" [(ngModel)]="model.login.password" placeholder="Password" required>
          </md-input-container>
        </div>
      </div>

      <div md-dialog-actions>
        <button md-button type="submit">Submit</button>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends MaterialSecurityComponent {}
