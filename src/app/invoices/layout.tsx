import { MainLayout } from "@/components/layout/main-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | InvoiceHub",
    default: "InvoiceHub",
  },
  description:
    "InvoiceHub is a free and open-source invoicing software for small businesses.",
};

export default function InvoicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
