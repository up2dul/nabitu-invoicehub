"use client";
import { InvoiceSnackbar } from "@/components/ui/invoice-snackbar";
import { type InvoiceSchema, invoiceSchema } from "@/lib/schemas";
import { generateInvoiceNumber } from "@/lib/utils";
import { submitForm } from "@/server/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid2 as Grid,
  MenuItem,
  Select,
  type SnackbarCloseReason,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

type InvoiceFormProps =
  | {
      mode: "add";
    }
  | {
      mode: "update";
      selectedInvoice: InvoiceSchema;
    };

export const InvoiceForm = (props: InvoiceFormProps) => {
  const { mode } = props;
  const [invoiceNumber, setInvoiceNumber] = useState(
    mode === "add" ? generateInvoiceNumber() : props.selectedInvoice.number,
  );
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceSchema>({
    resolver: zodResolver(invoiceSchema),
    defaultValues:
      mode === "update"
        ? {
            ...props.selectedInvoice,
            dueDate: dayjs(props.selectedInvoice.dueDate),
          }
        : undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] = useState(false);
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = useState(false);

  const onSubmitForm: SubmitHandler<InvoiceSchema> = async data => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("number", data.number);
    formData.append("dueDate", data.dueDate);
    formData.append("amount", data.amount);
    formData.append("status", data.status);

    const { data: success, errors } = await submitForm(formData, mode);

    if (errors) {
      if (mode === "add") {
        console.error("Error adding invoice:", errors);
      } else {
        console.error("Error updating invoice:", errors);
      }
      setIsErrorSnackbarOpen(true);
      setIsLoading(false);
      return;
    }

    if (success) {
      setIsSuccessSnackbarOpen(true);
      if (mode === "add") {
        reset();
        setInvoiceNumber(generateInvoiceNumber());
      }
      setIsLoading(false);
    }
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
      <form onSubmit={handleSubmit(onSubmitForm)}>
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
                placeholder="Auto Generated"
                error={Boolean(errors.number)}
                helperText={errors.number?.message}
                value={invoiceNumber}
                disabled
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
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <FormControl error={Boolean(errors.amount)} fullWidth>
                  <FormLabel htmlFor="invoice-amount" required>
                    Amount
                  </FormLabel>

                  <NumericFormat
                    allowNegative={false}
                    thousandSeparator
                    customInput={TextField}
                    size="small"
                    id="invoice-amount"
                    placeholder="Enter your invoice amount"
                    error={Boolean(errors.amount)}
                    helperText={errors.amount?.message}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <Typography sx={{ color: "#64748B" }}>Rp</Typography>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiInputBase-input": {
                        paddingLeft: "0.8rem",
                      },
                    }}
                    {...field}
                  />
                </FormControl>
              )}
            />
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
              startIcon={isLoading ? <CircularProgress size={24} /> : null}
              disabled={isLoading}
            >
              {mode === "add" ? "Add Invoice" : "Update Invoice"}
            </Button>
          </Grid>
        </Grid>
      </form>

      <InvoiceSnackbar
        type="success"
        isOpen={isSuccessSnackbarOpen}
        handleClose={handleClose}
      />
      <InvoiceSnackbar
        type="error"
        isOpen={isErrorSnackbarOpen}
        handleClose={handleClose}
      />
    </>
  );
};
