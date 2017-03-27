import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot } from '@angular/router';

import { SecurityGuardAuthorizer } from './security-guard-authorizer';
import { SecurityGuardModel } from './security-guard.model';

import { Observable } from 'rxjs';

@Injectable()
export class SecurityGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    public authService: SecurityGuardAuthorizer,
  ) {}

  /**
   * CanActivate hook.
   */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const model = route.data ? (route.data as any).SecurityGuardModel as SecurityGuardModel : undefined;
    if (model) {
      return this.authService.canActivate(model, route, state);
    } else {
      console.warn(`Expecting 'SecurityGuardModel' in route data`, { route });
      return false;
    }
  }

  /**
   * CanActivateChild hook.
   */
  public canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const model = route.data ? (route.data as any).SecurityGuardModel as SecurityGuardModel : undefined;
    if (model) {
      return this.authService.canActivate(model, route, state);
    } else {
      console.warn(`Expecting 'SecurityGuardModel' in route data`, { route });
      return false;
    }
  }

  /**
   * CanActivate hook.
   */
  public canLoad(
    route: Route,
  ): Observable<boolean> | Promise<boolean> | boolean {
    const model = route.data ? (route.data as any).SecurityGuardModel as SecurityGuardModel : undefined;
    if (model) {
      return this.authService.canLoad(model, route);
    } else {
      console.warn(`Expecting 'SecurityGuardModel' in route data`, { route });
      return false;
    }
  }
}
