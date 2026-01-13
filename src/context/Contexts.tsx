import { Fragment, type PropsWithChildren, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import type { AppContextProps } from "@/types";
import { AppContext } from ".";

export function AppProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: AppContextProps;
}) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function LenisProvider({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      <Fragment>{children}</Fragment>
    </ReactLenis>
  );
}
