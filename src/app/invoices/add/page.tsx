import { Box, Grid2 as Grid, TextField, Typography } from "@mui/material";

export const metadata = {
  title: "Add Invoice",
};

export default function InvoicesAddPage() {
  return (
    <Box
      component="section"
      sx={{
        pt: "52px",
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
          borderRadius: "2px",
        }}
      >
        <Typography sx={{ mb: "40px", fontWeight: 600 }}>
          Invoice Form
        </Typography>

        <form>
          <Grid container columnSpacing="35px" rowSpacing="18px">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2">
                Name <span style={{ color: "#F23030" }}>*</span>
              </Typography>
              <TextField
                id="name"
                placeholder="Enter your invoice name"
                variant="outlined"
                sx={{ mt: "12px", width: "100%" }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2">
                Number <span style={{ color: "#F23030" }}>*</span>
              </Typography>
              <TextField
                id="number"
                placeholder="Enter your invoice number"
                variant="outlined"
                sx={{ mt: "12px", width: "100%" }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
