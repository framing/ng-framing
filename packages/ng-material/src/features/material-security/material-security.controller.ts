import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Action, Controller } from '@framing/ng-core';

import { MaterialAppController } from '../material-app/material-app.controller';

import { MaterialSecurityModel as M } from './material-security.model';
import { MaterialSecurityView as V } from './material-security.view';

@Injectable()
export class MaterialSecurityController extends Controller<M, V> {

  // ========================================
  // private properties
  // ========================================

  private loginAppBarAction: any = {
    label: 'Login',
    icon: 'account_circle',
    action: () => this.login(),
  };

  private loginDialog: MdDialogRef<any>;

  private logoutAppBarAction: any = {
    label: 'Logout',
    icon: 'exit_to_app',
    action: () => this.logout(),
  };

  private logoutDialog: MdDialogRef<any>;

  // ========================================
  // constructor
  // ========================================

  constructor(
    private materialAppController: MaterialAppController,
    private mdDialog: MdDialog,
  ) {
    super();
  }

  // ========================================
  // init actions
  // ========================================

  public onAttached(): void {
    this.materialAppController
      .addAppBarAction(this.loginAppBarAction);
  }

  public onDetached(): void {
    this.materialAppController
      .removeAppBarAction(this.loginAppBarAction);

    this.materialAppController
      .removeAppBarAction(this.logoutAppBarAction);
  }

  // ========================================
  // forgot password actions
  // ========================================

  @Action() forgotPassword(): void {
    // TODO
  }

  @Action() forgotPasswordSucess(): void {
    // TODO
  }

  // ========================================
  // login actions
  // ========================================

  @Action() login(): void {
    this.model.login = {};
    this.model.loginError = false;

    this.loginDialog = this.mdDialog.open(this.view.login);
  }

  @Action() loginSubmit(): void {
    if (this.loginAuthenticate()) {
      this.loginSuccess();
    } else {
      this.loginError();
    }
  }

  loginAuthenticate(): boolean {
    return this.model.login.username == 'admin' &&
      this.model.login.password == 'admin';
  }

  @Action() loginSuccess(): void {
    this.model.user = {
      username: this.model.login.username,
    };

    this.materialAppController
      .replaceAppBarAction(
        this.loginAppBarAction,
        this.logoutAppBarAction,
      );

    this.closeLoginDialog();
  }

  @Action() loginError(): void {
    this.model.loginError = true;
  }

  @Action() closeLoginDialog(): void {
    this.loginDialog.close();
    this.loginDialog = null;

    this.model.login = {};
  }

  // ========================================
  // logout actions
  // ========================================

  @Action() logout(): void {
    this.logoutDialog = this.mdDialog.open(this.view.logout);
  }

  @Action() logoutSubmit(): void {
    this.logoutSuccess();
  }

  @Action() logoutSuccess(): void {
    this.materialAppController
      .replaceAppBarAction(
        this.logoutAppBarAction,
        this.loginAppBarAction
      );

    this.model.user = null;

    this.closeLogoutDialog();
  }

  @Action() logoutCancel(): void {
    this.closeLogoutDialog();
  }

  @Action() closeLogoutDialog(): void {
    this.logoutDialog.close();
    this.logoutDialog = null;
  }
}
