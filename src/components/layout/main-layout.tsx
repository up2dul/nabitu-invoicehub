import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Box } from "@mui/material";
import { Suspense } from "react";

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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

      <Box sx={{ pt: "80px", pl: { xs: "80px", md: "280px" } }}>
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </Box>
  );
};
