"use client";
import { useInvoices } from "@/hooks/use-invoices";
import { dateToReadable } from "@/lib/utils";
import { Reorder } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StatusChip } from "../ui/status-chip";

export default function InvoicesTable() {
  const { invoices } = useInvoices();

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
          {invoices.map(invoice => (
            <TableRow
              key={invoice.number}
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
              <TableCell align="center">{invoice.amount}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="actions">
                  <Reorder />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
