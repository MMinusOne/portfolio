"use client";

import type { Metadata } from "next";
import "@/styles/globals.scss";
import aos from "aos";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "MMinusOne",
//   description: "MMinus One's portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    aos.init();
  });
  
  return (
    <html lang="en h-full w-full">
      <body className={`h-full w-full m-0 p-0 antialiased`}>{children}</body>
    </html>
  );
}
