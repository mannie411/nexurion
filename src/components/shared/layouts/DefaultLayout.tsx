import { useState } from "react";

import Footer from "./Footer";
import Drawer from "./Drawer";
import Header from "./Header";
import { cn } from "@/components/ui/utils";
import type { DrawerState, NavbarState } from "@/types";
import { AppProvider } from "@/context";
import { CTASection } from "../blocks";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  const [drawerState, setDrawerState] = useState<DrawerState>("collapsed");
  const [navbarState, setNavbarState] = useState<NavbarState>("hero");
  const [scheduleState, setScheduleState] = useState<boolean>(false);

  const toggleSchedule = () => {
    if (!scheduleState) {
      setScheduleState(true);
    }
  };

  const contextValue = {
    drawerState,
    navbarState,
    setDrawerState,
    setNavbarState,
    toggleSchedule,
  };

  return (
    <AppProvider value={contextValue}>
      <Header />
      <main className={cn("overflow-clip", className)}>
        {children}
        <CTASection />
      </main>
      <Footer />

      <Drawer
        isOpen={drawerState === "expanded"}
        onClose={() => setDrawerState("collapsed")}
      />
    </AppProvider>
  );
};

export default Layout;
