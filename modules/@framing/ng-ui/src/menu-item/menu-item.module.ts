import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { MenuItemService } from './menu-item.service';

@NgModule(Framing((framing) => framing.provider(MenuItemService)))
export class MenuItemModule {}
