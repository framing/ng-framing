import { Type } from '@angular/core';

export interface AppView {
  appBarActionsComponent?: Type<any>;

  appBarTitleComponent?: Type<any>;

  appBarComponent?: Type<any>;

  appRootComponent?: Type<any>;

  rightNavComponent?: Type<any>;

  sideNavComponent?: Type<any>;

  sideNavContentComponent?: Type<any>;

  sideNavSubTitleComponent?: Type<any>;

  sideNavTitleComponent?: Type<any>;
}
