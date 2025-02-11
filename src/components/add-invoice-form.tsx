"use client";
import { useInvoices } from "@/hooks/use-invoices";
import { type InvoiceSchema, invoiceSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid2 as Grid,
  MenuItem,
  Select,
  type SnackbarCloseReason,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { InvoiceSnackbar } from "./invoice-snackbar";

export const AddInvoiceForm = () => {
  const { isLoading, addInvoice } = useInvoices();
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceSchema>({
    resolver: zodResolver(invoiceSchema),
  });
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const onSubmit = (data: InvoiceSchema) => {
    addInvoice(data)
      .then(() => {
        setIsSuccessSnackbarOpen(true);
        reset();
      })
      .catch(error => {
        setIsErrorSnackbarOpen(true);
        console.error("Error adding invoice:", error);
      });
  };

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSuccessSnackbarOpen(false);
    setIsErrorSnackbarOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing="35px" rowSpacing="18px">
          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl error={Boolean(errors.name)} fullWidth>
              <FormLabel htmlFor="invoice-name" required>
                Name
              </FormLabel>

              <TextField
                size="small"
                id="invoice-name"
                placeholder="Enter your invoice name"
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
                {...register("name")}
              />
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl error={Boolean(errors.number)} fullWidth>
              <FormLabel htmlFor="invoice-number" required>
                Number
              </FormLabel>

              <TextField
                size="small"
                id="invoice-number"
                placeholder="Enter your invoice number"
                error={Boolean(errors.number)}
                helperText={errors.number?.message}
                {...register("number")}
              />
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.dueDate)} fullWidth>
                  <FormLabel htmlFor="invoice-dueDate" required>
                    Due Date
                  </FormLabel>

                  <DatePicker
                    format="DD/MM/YYYY"
                    sx={{
                      borderRadius: "4px",
                      outline: errors.dueDate ? "1px solid red" : "none",
                    }}
                    {...field}
                  />

                  <FormHelperText error={Boolean(errors.dueDate)}>
                    {errors.dueDate?.message?.toString()}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormControl error={Boolean(errors.amount)} fullWidth>
              <FormLabel htmlFor="invoice-amount" required>
                Amount
              </FormLabel>

              <TextField
                size="small"
                id="invoice-amount"
                placeholder="Enter your invoice amount"
                error={Boolean(errors.amount)}
                helperText={errors.amount?.message}
                {...register("amount")}
              />
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange, value, ...field } }) => (
                <FormControl error={Boolean(errors.status)} fullWidth>
                  <FormLabel htmlFor="status" required>
                    Status
                  </FormLabel>
                  <Select
                    size="small"
                    displayEmpty
                    value={value || ""}
                    onChange={onChange}
                    error={Boolean(errors.status)}
                    {...field}
                  >
                    <MenuItem value="" disabled>
                      Choose the status
                    </MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="unpaid">Unpaid</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                  </Select>
                  <FormHelperText error={Boolean(errors.status)}>
                    {errors.status?.message}
                  </FormHelperText>
                </FormControl>
              )}
            />
          </Grid>

          <Grid size={12} sx={{ mt: "58px", textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<Add />}
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Invoice"}
            </Button>
          </Grid>
        </Grid>
      </form>

      <InvoiceSnackbar
        type="success"
        isSnackbarOpen={isSuccessSnackbarOpen}
        handleClose={handleClose}
      />
      <InvoiceSnackbar
        type="error"
        isSnackbarOpen={isErrorSnackbarOpen}
        handleClose={handleClose}
      />
    </>
  );
};
