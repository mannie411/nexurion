import type { Dispatch, SetStateAction } from "react";

export type GenericObject = { [key: string]: unknown };

export type DrawerState = "expanded" | "collapsed";
export type NavbarState = "default" | "hero";

export interface AppContextProps {
  drawerState: DrawerState;
  navbarState: NavbarState;
  setDrawerState: Dispatch<SetStateAction<DrawerState>>;
  setNavbarState: Dispatch<SetStateAction<NavbarState>>;
  toggleSchedule: () => void;
}

export type LinkProps = {
  title: string;
  path: string;
};

export type ImageProp = {
  className?: string;
  imgSrc?: string;
  href?: string;
};

export interface Testimonial {
  content: string;
  name: string;
  role: string;
}
