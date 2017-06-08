import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'forgot-password-success',
  template: `
    <div>Forgot Password Success</div>

    <button>OK</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordSuccessComponent extends MaterialSecurityComponent {}
