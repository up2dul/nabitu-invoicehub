import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const metadata = {
  title: "Add Invoice",
};

export default function InvoicesAddPage() {
  return (
    <Box
      component="section"
      sx={{
        pt: "52px",
        pb: "315px",
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
        <Typography sx={{ mb: "40px", fontWeight: 600 }}>
          Invoice Form
        </Typography>

        <form>
          <Grid container columnSpacing="35px" rowSpacing="18px">
            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel
                htmlFor="invoice-name"
                sx={{ fontSize: "14px", color: "primary.dark" }}
              >
                Name <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <TextField
                id="invoice-name"
                placeholder="Enter your invoice name"
                variant="outlined"
                sx={{ mt: "12px", width: "100%" }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel
                htmlFor="invoice-number"
                sx={{ fontSize: "14px", color: "primary.dark" }}
              >
                Number <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <TextField
                id="invoice-number"
                placeholder="Enter your invoice number"
                variant="outlined"
                sx={{ mt: "12px", width: "100%" }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel sx={{ fontSize: "14px", color: "primary.dark" }}>
                Due Date <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <DatePicker sx={{ mt: "12px", width: "100%" }} />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel
                htmlFor="invoice-amount"
                sx={{ fontSize: "14px", color: "primary.dark" }}
              >
                Amount <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <TextField
                id="invoice-amount"
                placeholder="Enter your invoice amount"
                variant="outlined"
                sx={{ mt: "12px", width: "100%" }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel
                htmlFor="invoice-status"
                sx={{ fontSize: "14px", color: "primary.dark" }}
              >
                Status <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <Select id="invoice-status" sx={{ mt: "12px", width: "100%" }}>
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="unpaid">Unpaid</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </Grid>

            <Grid size={12} sx={{ mt: "58px", textAlign: "right" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Add />}
              >
                Add Invoice
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
