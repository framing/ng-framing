import { Injectable, Injector, Type } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { FramingContainerOutletContent } from './container-outlet-content';

@Injectable()
export class FramingContainerOutletResolver implements Resolve<{ [key: string]: FramingContainerOutletContent }> {

  constructor(
    private containers: { [key: string]: Type<any> },
    private injector: Injector,
  ) {}

  /**
   * Resolve hook.
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { [key: string]: FramingContainerOutletContent } {
    let result: { [key: string]: FramingContainerOutletContent } = {};
    for (let key in this.containers) {
      if (this.containers.hasOwnProperty(key)) {
        result[key] = {
          container: key,
          component: this.containers[key],
          injector: this.injector,
        };
      }
    }
    return result;
  }
}
