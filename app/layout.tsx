import MainLayout from "@/components/layouts/main-layout";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}
