import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { FramingContainerOutletContent } from './container-outlet-content';

@Injectable()
export class FramingContainerOutletResolver implements Resolve<FramingContainerOutletContent[]> {

  constructor(
    private containers: FramingContainerOutletContent[],
    private injector: Injector,
  ) {}

  /**
   * Resolve hook.
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): FramingContainerOutletContent[] {
    // set the injector in each container
    for (let container of this.containers) {
      container.injector = this.injector;
    }
    return this.containers;
  }
}
