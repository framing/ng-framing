import { Injectable, Provider } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Ribbon } from './ribbon';
import { RibbonModel } from './ribbon.model';

@Injectable()
export class RibbonResolver implements Resolve<Ribbon> {

  static provider(model: RibbonModel): Provider {
    return {
      provide: RibbonResolver,
      useFactory: () => new RibbonResolver(model),
    };
  }

  constructor(
    private model: RibbonModel,
  ) {}

  /**
   * Resolve hook.
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Ribbon {
    let ribbon: Ribbon = {
      hasSave: this.model.hasSave,
      hasBack: this.model.hasBack,
    };
    return ribbon;
  }
}
