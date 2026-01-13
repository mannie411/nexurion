import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context";

export * from "./ui";

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

export const useDocumentTitle = (title: string) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    // Revert to default title on component unmount
    const initialTitle = defaultTitle.current;
    return () => {
      document.title = initialTitle;
    };
  }, []);
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      // Use window.scrollY for modern browsers, or window.pageYOffset for compatibility
      setScrollPosition(window.scrollY || window.pageYOffset);
    };

    // Add event listener on mount
    window.addEventListener("scroll", updatePosition, { passive: true }); // Use passive event for better performance

    // Call updatePosition once to get the initial position
    updatePosition();

    // Remove event listener on unmount
    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // Empty dependency array ensures the effect runs only once on mount and unmount

  return scrollPosition;
};
