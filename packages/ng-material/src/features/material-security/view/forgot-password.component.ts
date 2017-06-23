import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'forgot-password',
  template: `
    <div>Forgot Password</div>

    <form>
      <div><input [(ngModel)]="model.forgotPassword.email" placeholder="Email"></div>

      <div><button type="submit">Submit</button></div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordComponent extends MaterialSecurityComponent {}
