'use client'

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {

  return (
    <div className=" font-Onest antialiased">
      <Navbar />
      {children}
    </div>
  );
}
