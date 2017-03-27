import { Type } from '@angular/core';

export interface RibbonModel {
  /**
   * Defaults to false.
   */
  hasSave?: boolean;

  /**
   * Defaults to false.
   */
  hasBack?: boolean;

  /**
   * Ribbon content component.
   * Defaults to undefined.
   */
  contentComponent?: Type<any>;

  /**
   * Ribbon content component container.
   * Defaults to undefined.
   */
  contentComponentContainer?: string;
}
