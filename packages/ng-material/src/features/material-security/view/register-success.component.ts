import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'register-success',
  template: `
    <div>Register Success</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterSuccessComponent extends MaterialSecurityComponent {}
