"use client";

import { useRouter } from "next/navigation";
import { useConfig } from "nextra-theme-docs";
import { ReactNode, useEffect, useMemo } from "react";

export default function WrapperKeyboardShortcut({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const config = useConfig();

  const nextPrevPath = useMemo(() => {
    const { activePath, flatDocsDirectories } = config.normalizePagesResult;

    const currentActivePath = activePath[activePath.length - 1];

    const currentActivePathIndex = flatDocsDirectories.findIndex(
      (e) =>
        e.name === currentActivePath.name &&
        e.route === currentActivePath.route,
    );

    return {
      prev:
        currentActivePathIndex === 0
          ? null
          : flatDocsDirectories[currentActivePathIndex - 1],
      next:
        currentActivePathIndex === flatDocsDirectories.length
          ? null
          : flatDocsDirectories[currentActivePathIndex + 1],
    };
  }, [config]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { next, prev } = nextPrevPath;

      if (e.key.toLowerCase() === "d") {
        next && router.push(next.route);
      } else if (e.key.toLowerCase() === "a") {
        prev && router.push(prev.route);
      }
    };

    window.addEventListener("keypress", handler);

    return () => window.removeEventListener("keypress", handler);
  }, [router, nextPrevPath]);

  return <>{children}</>;
}
