import React from "react";

export default function Layout({ children }) {
  return (
    <div className="w-full max-w-screen-xl h-full pt-20 overflow-hidden px-2">
      {children}
    </div>
  );
}
