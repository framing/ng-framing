import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';

import { AppSidenavSubTitleComponent } from './app-sidenav-sub-title.component';
import { ForgotPasswordSuccessComponent } from './forgot-password-success.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';
import { RegisterSuccessComponent } from './register-success.component';
import { RegisterComponent } from './register.component';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule,
  ])
  .declarationsAndEntryComponents([
    AppSidenavSubTitleComponent,
    ForgotPasswordSuccessComponent,
    ForgotPasswordComponent,
    LoginComponent,
    LogoutComponent,
    RegisterSuccessComponent,
    RegisterComponent,
  ]),
))
export class MaterialSecurityViewModule {}
