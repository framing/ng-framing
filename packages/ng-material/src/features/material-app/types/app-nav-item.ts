export interface AppNavItem {
  icon?: string;

  label?: string;

  routerLink?: string;

  isSubheader?: boolean;

  action?: Function;

  isSelected?: boolean;

  enabled?: boolean;
}
