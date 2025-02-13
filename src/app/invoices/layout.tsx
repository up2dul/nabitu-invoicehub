import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Suspense } from "react";

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
  return (
    <Box
      component="main"
      sx={{
        bgcolor: "primary.light",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Sidebar />

      <Topbar />

      <Box sx={{ pt: "80px", pl: { xs: "90px", md: "280px" } }}>
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </Box>
  );
}
