"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const UniversalWrapper = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  const hideOnPath = ["/auth/sign-in", "/auth/sign-up"];
  if (hideOnPath.includes(pathName)) return null;
  return <>{children}</>;
};
