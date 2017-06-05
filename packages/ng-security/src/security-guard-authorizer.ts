import { ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SecurityGuardModel } from './security-guard.model';

export abstract class SecurityGuardAuthorizer {
  public abstract canActivate(
    config: SecurityGuardModel,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean;

  public abstract canActivateChild(
    config: SecurityGuardModel,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean;

  public abstract canLoad(
    config: SecurityGuardModel,
    route: Route,
  ): Observable<boolean> | Promise<boolean> | boolean;
}
