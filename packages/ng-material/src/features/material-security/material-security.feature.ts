import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialAppController } from '../material-app/material-app.controller';

import { MaterialSecurityController as C } from './material-security.controller';
import { MaterialSecurityModel as M } from './material-security.model';
import { MaterialSecurityView as V } from './material-security.view';

import { AppSidenavSubTitleComponent } from './view/app-sidenav-sub-title.component';
import { ForgotPasswordComponent } from './view/forgot-password.component';
import { ForgotPasswordSuccessComponent } from './view/forgot-password-success.component';
import { LoginComponent } from './view/login.component';
import { LogoutComponent } from './view/logout.component';
import { RegisterComponent } from './view/register.component';
import { RegisterSuccessComponent } from './view/register-success.component';
import { MaterialSecurityViewModule } from './view/view.module';

export class MaterialSecurityFeature extends Framer<M, V> {
  public get defaultModel(): M {
    return {
      user: null,
    };
  }

  public get defaultView(): V {
    return {
      forgotPassword: ForgotPasswordComponent,
      forgotPasswordSuccess: ForgotPasswordSuccessComponent,
      login: LoginComponent,
      logout: LogoutComponent,
      register: RegisterComponent,
      registerSuccess: RegisterSuccessComponent,
    };
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(MaterialSecurityViewModule);
  }

  public framerOnResolveRoute(): void {
    let materialAppController: MaterialAppController = this.injector.get(MaterialAppController);

    materialAppController.updateView({
      sideNavSubTitle: AppSidenavSubTitleComponent,
    });
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return 'MaterialSecurity'; }

  public get defaultController(): Type<C> { return C; }
}
