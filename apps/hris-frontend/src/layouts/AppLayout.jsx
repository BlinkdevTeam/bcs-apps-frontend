import React from "react";
import Header from "../Header/Header";

export default function AppLayout({ children }) {
  return (
    <div
      className="flex h-screen text-black"
      style={{ fontFamily: "'Georgia', serif", backgroundColor: "#f8f7f3" }}
    >
      <Header />

      <main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
        <div className="w-full h-full">{children}</div>
      </main>
    </div>
  );
}