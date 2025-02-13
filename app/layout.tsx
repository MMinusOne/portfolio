import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "MMinusOne",
  description: "MMinus One's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en h-full w-full">
      <body
        className={`h-full w-full m-0 p-0 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
