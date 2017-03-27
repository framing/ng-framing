import { ActivatedRouteSnapshot } from '@angular/router';
import { FramingContainerOutletContent } from '@framing/ng-core';

export interface Ribbon {
  /**
   * Defaults to false.
   */
  hasSave?: boolean;

  /**
   * Defaults to false.
   */
  hasBack?: boolean;

  /**
   * Ribbon container content.
   * Defaults to undefined.
   */
  containerContent?: FramingContainerOutletContent;

  /**
   * The route snapshot associated with this ribbon
   */
  routeSnapshot?: ActivatedRouteSnapshot;
}
