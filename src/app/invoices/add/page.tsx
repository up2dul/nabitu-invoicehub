"use client";
import { type InvoiceSchema, invoiceSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";

// export const metadata = {
//   title: "Add Invoice",
// };

export default function InvoicesAddPage() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InvoiceSchema>({
    resolver: zodResolver(invoiceSchema),
  });

  const onSubmit = (data: InvoiceSchema) => {
    console.log("Submitted:", data);
  };

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
        <Typography sx={{ mb: "40px", fontWeight: 600 }}>
          Invoice Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
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
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                {...register("name")}
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
                error={Boolean(errors.number)}
                helperText={errors.number?.message}
                {...register("number")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel sx={{ fontSize: "14px", color: "primary.dark" }}>
                Due Date <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <Controller
                name="dueDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    format="DD/MM/YYYY"
                    sx={{
                      mt: "12px",
                      width: "100%",
                      borderRadius: "4px",
                      outline: errors.dueDate ? "1px solid red" : "none",
                    }}
                    {...field}
                  />
                )}
              />

              <FormHelperText error={Boolean(errors.dueDate)}>
                {errors.dueDate?.message?.toString()}
              </FormHelperText>
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
                error={Boolean(errors.amount)}
                helperText={errors.amount?.message}
                {...register("amount")}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <InputLabel
                htmlFor="invoice-status"
                sx={{ fontSize: "14px", color: "primary.dark" }}
              >
                Status <span style={{ color: "#F23030" }}>*</span>
              </InputLabel>
              <Select
                id="invoice-status"
                sx={{ mt: "12px", width: "100%" }}
                error={Boolean(errors.status)}
                {...register("status")}
              >
                <MenuItem value="paid">Paid</MenuItem>
                <MenuItem value="unpaid">Unpaid</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
              <FormHelperText error={Boolean(errors.status)}>
                {errors.status?.message}
              </FormHelperText>
            </Grid>

            <Grid size={12} sx={{ mt: "58px", textAlign: "right" }}>
              <Button
                type="submit"
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
