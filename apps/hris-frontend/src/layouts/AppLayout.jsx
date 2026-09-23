import React from "react";
import Header from "../Header/Header";

export default function AppLayout({ children }) {
  return (
    <div
      className="min-h-screen text-black flex flex-col"
      style={{ 
        fontFamily: "'Georgia', serif", 
        backgroundColor: "#f8f7f3",
        position: "relative" // Ensures absolute/fixed children align correctly
      }}
    >
      {/* Wrapping the Header in a div with a z-index ensures 
         it stays above any content within the {children} 
      */}
      <div className="z-50 w-full bg-[#f8f7f3] shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
        <Header />
      </div>

      {/* Changed overflow-hidden to overflow-y-auto 
         If children are taller than the screen, you need to allow scrolling
         while keeping the header visible.
      */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
}