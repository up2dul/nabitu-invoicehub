"use client";
import { StatusChip } from "@/components/ui/status-chip";
import { TableMenu } from "@/components/ui/table-menu";
import type { InvoiceSchema } from "@/lib/schemas";
import { dateToReadable } from "@/lib/utils";
import { deleteInvoice } from "@/server/actions";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "nextjs-toploader/app";

type InvoicesTableProps = {
  invoices: InvoiceSchema[];
};

export const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="invoices table">
        <TableHead sx={{ "& th": { fontWeight: 700 } }}>
          <TableRow>
            <TableCell>Invoice</TableCell>
            <TableCell align="center">Due Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.length === 0 && (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" colSpan={5}>
                <Typography sx={{ textAlign: "center" }}>
                  There is no invoices found
                </Typography>
              </TableCell>
            </TableRow>
          )}
          {invoices.map(invoice => (
            <TableRow
              key={invoice.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography>{invoice.name}</Typography>
                <Typography
                  variant="caption"
                  color="#64748B"
                  sx={{ fontWeight: 600 }}
                >
                  {invoice.number}
                </Typography>
              </TableCell>
              <TableCell align="center">
                {dateToReadable(invoice.dueDate)}
              </TableCell>
              <TableCell align="center">
                <StatusChip status={invoice.status} />
              </TableCell>
              <TableCell align="center">Rp {invoice.amount}</TableCell>
              <TableCell align="center">
                <TableMenu
                  onUpdate={() =>
                    router.push(`/invoices/update/${invoice.number}`)
                  }
                  onDelete={() => deleteInvoice(invoice.number)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
