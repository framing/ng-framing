import { AppNavItem } from './types/app-nav-item';

export interface AppModel {
  appBarActions?: AppNavItem[];

  isRoot?: boolean;

  rightNavItems?: AppNavItem[];

  rightNavOpened?: boolean;

  sideNavItems?: AppNavItem[];

  sideNavOpened?: boolean;

  title?: string;
}
