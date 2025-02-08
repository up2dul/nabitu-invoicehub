import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { Box } from "@mui/material";

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

      <Box
        component="section"
        sx={{ pt: "80px", pl: { xs: "90px", md: "280px" } }}
      >
        {children}
      </Box>
    </Box>
  );
}
