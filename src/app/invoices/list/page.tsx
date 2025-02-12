import InvoicesTable from "@/components/invoices-table";
import { Box, Typography } from "@mui/material";

export const metadata = {
  title: "Invoices List",
};

export default function InvoicesListPage() {
  return (
    <Box
      component="section"
      sx={{
        py: "52px",
        px: { xs: "10px", sm: "40px", md: "60px", lg: "135px" },
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          My Invoices
        </Typography>

        {/* TODO: search and status filter */}
      </Box>

      <Box
        sx={{
          mt: "38px",
          p: "30px",
          bgcolor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: "2px",
          boxShadow: "0 8px 13px -3px rgba(0, 0, 0, 0.07)",
        }}
      >
        <InvoicesTable />
      </Box>
    </Box>
  );
}
