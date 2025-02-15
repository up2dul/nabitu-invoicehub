import { MainLayout } from "@/components/layout/main-layout";
import { Box, Typography } from "@mui/material";

export default function InvoicesNotFoundPage() {
  return (
    <MainLayout>
      <Box
        component="section"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "primary.dark" }}
        >
          404 - Page Not Found
        </Typography>
      </Box>
    </MainLayout>
  );
}
