import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walk-in Booking",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Walk-in",
  },
};

export const viewport = {
  themeColor: "#A30A24",
};

export default function WalkInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
