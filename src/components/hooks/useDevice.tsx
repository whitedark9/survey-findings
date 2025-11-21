"use client";

import { useEffect, useState } from "react";

export function useDevice() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define breakpoints
  const isMobile = width !== undefined && width < 640; // Tailwind's sm
  const isTablet = width !== undefined && width >= 640 && width < 1024; // md
  const isDesktop = width !== undefined && width >= 1024; // lg+

  return { width, isMobile, isTablet, isDesktop };
}
