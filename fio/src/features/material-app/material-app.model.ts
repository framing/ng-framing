import { AppNavItem } from './types/app-nav-item';

export interface MaterialAppModel {
  appBarActions?: AppNavItem[];

  appBarTitle?: string;

  isRoot?: boolean;

  rightNavItems?: AppNavItem[];

  rightNavOpened?: boolean;

  sideNavItems?: AppNavItem[];

  sideNavOpened?: boolean;

  sideNavTitle?: string;
}
