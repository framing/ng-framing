import { Injector, Type } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Breadcrumb } from './breadcrumb';

export interface BreadcrumbStatic {
  /**
   * The label for this breadcrumb.
   */
  label: string;

  /**
   * Optional icon name.
   */
  icon?: string;

  /**
   * Disables the link on the breadcrumb if set to false.
   */
  link?: string | boolean;
}

export interface BreadcrumbFactory {
  breadcrumb(): Breadcrumb | Observable<Breadcrumb> | Promise<Breadcrumb>;
}

export class BreadcrumbFactoryInjector {
  constructor(
    private factory: Type<BreadcrumbFactory>,
    private injector: Injector,
  ) {}

  get(): BreadcrumbFactory {
    return this.injector.get(this.factory);
  }
}

export interface BreadcrumbModel {
  /**
   *
   */
  breadcrumb: BreadcrumbStatic | Type<BreadcrumbFactory>;
}
