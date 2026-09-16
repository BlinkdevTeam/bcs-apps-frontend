"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import TitleWatcher from "./TitleWatcher";
import SmoothScrollProvider from "../animations/SmoothScrollProvider";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/walk-in");

  if (hideLayout) {
    return (
      <>
        <TitleWatcher />
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <TitleWatcher />
      <Header />
      <SmoothScrollProvider>
        <main className="pt-20">{children}</main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
