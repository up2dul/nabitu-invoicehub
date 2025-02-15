"use client";
import { INVOICE_SNACKBAR_MSG } from "@/lib/constants";
import {
  Alert,
  AlertTitle,
  Snackbar,
  type SnackbarCloseReason,
} from "@mui/material";
import { usePathname } from "next/navigation";

type SnackbarProps = {
  type: "success" | "error";
  isOpen: boolean;
  handleClose:
    | ((
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => void)
    | undefined;
};

export const InvoiceSnackbar = ({
  type,
  isOpen,
  handleClose,
}: SnackbarProps) => {
  const pathname = usePathname();
  const isAddInvoicePage = pathname === "/invoices/add";
  const invoiceMode = isAddInvoicePage ? "add" : "update";

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        <AlertTitle sx={{ fontWeight: 700 }}>
          {INVOICE_SNACKBAR_MSG[invoiceMode][type].title}
        </AlertTitle>
        {INVOICE_SNACKBAR_MSG[invoiceMode][type].description}
      </Alert>
    </Snackbar>
  );
};
