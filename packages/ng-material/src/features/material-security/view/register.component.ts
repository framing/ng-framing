import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MaterialSecurityComponent } from '../material-security.component';

@Component({
  selector: 'register',
  template: `
    <div>Register</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent extends MaterialSecurityComponent {}
