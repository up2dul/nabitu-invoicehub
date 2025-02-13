import { InvoiceForm } from "@/components/section/invoice-form";
import { Box, Typography } from "@mui/material";

export const metadata = {
  title: "Add Invoice",
};

export default function InvoicesAddPage() {
  return (
    <Box
      component="section"
      sx={{
        py: "52px",
        px: { xs: "10px", sm: "40px", md: "60px", lg: "135px" },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Add Invoice
      </Typography>

      <Box
        sx={{
          mt: "38px",
          p: "15px 26px",
          bgcolor: "white",
          border: "1px solid #E2E8F0",
          borderRadius: "2px",
          boxShadow: "0 8px 13px -3px rgba(0, 0, 0, 0.07)",
        }}
      >
        <Typography
          sx={{
            mb: "40px",
            fontWeight: 600,
            borderBottom: "1px solid #E2E8F0",
            pb: "15px",
          }}
        >
          Invoice Form
        </Typography>

        <InvoiceForm mode="add" />
      </Box>
    </Box>
  );
}
