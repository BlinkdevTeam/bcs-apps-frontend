"use client";

import { useEffect } from "react";
import { refreshAccessToken } from "@/lib/auth";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    refreshAccessToken();
  }, []);

  return <>{children}</>;
}
