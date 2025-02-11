import { invoiceSnackbarInfo } from "@/lib/constants";
import {
  Alert,
  AlertTitle,
  Snackbar,
  type SnackbarCloseReason,
} from "@mui/material";

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
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        <AlertTitle sx={{ fontWeight: 700 }}>
          {invoiceSnackbarInfo[type].title}
        </AlertTitle>
        {invoiceSnackbarInfo[type].description}
      </Alert>
    </Snackbar>
  );
};
