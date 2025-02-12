import { InvoicesFilter } from "@/components/section/invoices-filter";
import InvoicesTable from "@/components/section/invoices-table";
import { Box, Typography } from "@mui/material";

export const metadata = {
  title: "Invoices List",
};

type InvoicesListPageProps = {
  searchParams: {
    search: string;
    status: string;
  };
};

export default async function InvoicesListPage({
  searchParams,
}: InvoicesListPageProps) {
  const params = await searchParams;
  return (
    <Box
      component="section"
      sx={{
        py: "52px",
        px: { xs: "10px", sm: "40px", md: "60px", lg: "135px" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          My Invoices
        </Typography>

        {/* TODO: search and status filter */}
        <InvoicesFilter />
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
        <InvoicesTable searchParams={params} />
      </Box>
    </Box>
  );
}
