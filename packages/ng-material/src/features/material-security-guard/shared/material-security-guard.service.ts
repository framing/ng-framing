import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { MaterialSecurityController } from '../../material-security/material-security.controller';

@Injectable()
export class MaterialSecurityGuardService implements CanActivate {
  constructor(
    private materialSecurityController: MaterialSecurityController,
  ) {}

   /**
   * CanActivate hook.
   */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.materialSecurityController.model.user) {
      this.materialSecurityController.login();
      return false;
    } else {
      return true;
    }
  }
}
