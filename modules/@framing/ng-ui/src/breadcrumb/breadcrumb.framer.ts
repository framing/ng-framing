import { Framer, FramingNgModule } from '@framing/ng-core';

import { BreadcrumbModel } from './breadcrumb.model';
import { BreadcrumbResolver } from './breadcrumb.resolver';

export class BreadcrumbFramer extends Framer<BreadcrumbModel, void> {

  public get framerName(): string { return 'Breadcrumb'; }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    framing
      .resolves({ breadcrumb: BreadcrumbResolver }, this.route)
      .provide(BreadcrumbResolver.provider(this.theModel));
  }
}
