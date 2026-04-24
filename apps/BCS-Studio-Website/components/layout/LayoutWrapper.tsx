"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import TitleWatcher from "./TitleWatcher";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/dashboard") || pathname.startsWith("/login");

  return (
    <>
      <TitleWatcher />

      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
