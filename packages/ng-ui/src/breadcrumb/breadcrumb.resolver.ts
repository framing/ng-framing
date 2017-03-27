import { Injectable, Injector, Provider, Type } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Framer } from '@framing/ng-core';

import { Breadcrumb } from './breadcrumb';
import { BreadcrumbModel } from './breadcrumb.model';
import { BreadcrumbFactory, BreadcrumbFactoryInjector, BreadcrumbStatic } from './breadcrumb.model';

import * as _ from 'lodash';

@Injectable()
export class BreadcrumbResolver implements Resolve<Breadcrumb | BreadcrumbFactoryInjector> {

  static provider(model: BreadcrumbModel): Provider {
    return {
      provide: BreadcrumbResolver,
      useFactory: (injector: Injector) => new BreadcrumbResolver(model, injector),
      deps: [ Injector ],
    };
  }

  constructor(
    private model: BreadcrumbModel,
    private injector: Injector,
  ) {}

  /**
   * Resolve hook.
   */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Breadcrumb | BreadcrumbFactoryInjector {
    if ((this.model.breadcrumb as BreadcrumbStatic).label) {
      const breadcrumb = this.model.breadcrumb as BreadcrumbStatic;
      const link = breadcrumb.link === false ? undefined : (_.isString(breadcrumb.link) ? breadcrumb.link : Framer.buildUrlLink(route));
      return {
        label: breadcrumb.label,
        icon: breadcrumb.icon,
        link,
      };
    } else {
      return new BreadcrumbFactoryInjector(this.model.breadcrumb as Type<BreadcrumbFactory>, this.injector);
    }
  }
}
