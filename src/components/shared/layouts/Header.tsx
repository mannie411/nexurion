import { useCallback, useEffect, useMemo } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { logoLight, logoDark } from "@/assets/images";
import { useAppContext, useScrollPosition } from "@/hooks";
import { cn } from "@/components/ui/utils";
import type { DrawerState, NavbarState } from "@/types";

function Menu({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
        style={{
          "--stroke-0": color,
        }}
      >
        <g id="menu-01">
          <path
            d="M4 5H20"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 12H20"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M4 19H20"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function MenuIcon({
  color = "#FFFFFF",
  onClick,
}: {
  color?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[24px] items-center relative shrink-0 
      cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity"
      data-name="Menu Icon"
    >
      <Menu color={color} />
      <p
        className={cn(
          `font-neue-montreal hidden md:inline-block leading-[normal] not-italic 
      relative shrink-0 text-[12px]   tracking-[2.88px]`
        )}
        style={{
          color,
        }}
      >
        MENU
      </p>
    </button>
  );
}

function NavButton({
  color = "#FFFFFF",
  toggle,
}: {
  color: string;
  toggle: () => void;
}) {
  return (
    <button
      className="hidden md:flex items-center justify-center px-[24px] 
      py-[16px] relative shrink-0 cursor-pointer group hover:bg-white/10 transition-colors"
      data-name="Button"
      onClick={toggle}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute border border-solid  inset-0 pointer-events-none"
        )}
        style={{
          borderColor: color,
        }}
      />
      <p
        className={cn(
          `font-neue-montreal leading-[normal] not-italic relative shrink-0 
      text-[12px] text-center   tracking-[0.6px] uppercase`,
          `text-{${color}}`
        )}
        style={{
          color,
        }}
      >
        schedule consultation
      </p>
    </button>
  );
}

const transparentPaths = [
  "/", // Careful: every path starts with "/"
  "/about-us",
  "/contact-us",
  "/solutions",
];

export default function Header() {
  const routerState = useRouterState();
  const scrollPosition = useScrollPosition();
  const { navbarState, setDrawerState, setNavbarState, toggleSchedule } =
    useAppContext();
  const currentPath = routerState.location.pathname;

  const openDrawer = useCallback(() => {
    setDrawerState((prev: DrawerState) =>
      prev === "collapsed" ? "expanded" : prev
    );
  }, [setDrawerState]);

  const isHeaderTransparent = useMemo(() => {
    // 1. Check for exact match on root "/" to avoid everything matching
    if (currentPath === "/") {
      return navbarState === "hero";
    }

    // 2. Check if the current path starts with any of the subpaths
    const isMatchingPath = transparentPaths
      .filter((path) => path !== "/") // Exclude root from the "startsWith" check
      .some((path) => currentPath.startsWith(path));

    return isMatchingPath && navbarState === "hero";
  }, [currentPath, navbarState]);

  const color = useMemo(
    () => (isHeaderTransparent ? "#FFFFFF" : "#000000"),
    [isHeaderTransparent]
  );

  const headerClasses = useMemo(() => {
    const base =
      "sticky flex flex-col items-center z-40 justify-center top-0 w-full transition-colors duration-300";
    const theme = isHeaderTransparent
      ? "bg-transparent text-white"
      : "bg-white text-black shadow-sm";
    return `${base} ${theme}`;
  }, [isHeaderTransparent]);

  const logo = useMemo(() => {
    const threshold = 100;
    const isPastThreshold = scrollPosition > threshold;

    const logo = isPastThreshold ? logoDark : logoLight;

    return logo; // Default for other variants
  }, [scrollPosition]);

  useEffect(() => {
    setDrawerState("collapsed");
  }, [currentPath, setDrawerState]);

  useEffect(() => {
    const isPastThreshold = scrollPosition > 100;
    const nextState: NavbarState = isPastThreshold ? "default" : "hero";

    if (navbarState !== nextState) {
      setNavbarState(nextState);
    }
  }, [scrollPosition, navbarState, setNavbarState]);

  return (
    <header data-name="Header" className={headerClasses}>
      <div className="container relative overflow-clip" data-name="Navbar">
        <div className="content-stretch flex flex-col items-center justify-center  py-[32px] shrink-0 z-10">
          <div
            className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full"
            data-name="Container"
          >
            <MenuIcon color={color} onClick={openDrawer} />
            <div
              className="content-stretch flex-1 flex items-center justify-center relative shrink-0"
              data-name="Logo"
            >
              <Link to="/" className="block">
                <div
                  className="h-[32px] relative shrink-0 w-[236.169px]"
                  data-name="Nexurion logo 3 1"
                >
                  {isHeaderTransparent && (
                    <img
                      alt="Nexurion"
                      className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                      src={logo}
                    />
                  )}

                  {!isHeaderTransparent && (
                    <img
                      alt="Nexurion"
                      className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                      src={logoDark}
                    />
                  )}
                </div>
              </Link>
            </div>
            <NavButton color={color} toggle={toggleSchedule} />
          </div>
        </div>
      </div>
    </header>
  );
}
