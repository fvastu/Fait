export interface NavigationItem {
  label: string;
  subLabel?: string;
  children?: Array<NavigationItem>;
  href?: string;
}
