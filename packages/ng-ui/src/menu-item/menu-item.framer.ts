import { Framer, FramingNgModule } from '@framing/ng-core';

import { MenuItemModel } from './menu-item.model';

export class MenuItemFramer extends Framer<MenuItemModel, void> {

  public get framerName(): string { return 'MenuItem'; }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
  }
}
