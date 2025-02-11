import type { InvoiceSchema } from "@/lib/schemas";
import { useState } from "react";
import { useLocalStorage } from "./use-local-storage";

export function useInvoices() {
  const [invoices, setInvoices] = useLocalStorage<InvoiceSchema[]>(
    "invoices",
    [],
  );
  const [isLoading, setIsLoading] = useState(false);

  const addInvoice = (newInvoice: InvoiceSchema) => {
    setIsLoading(true);
    return new Promise(resolve => {
      setInvoices([...invoices, newInvoice]);
      // fake delay
      setTimeout(() => {
        setIsLoading(false);
        resolve(newInvoice);
      }, 1000);
    });
  };

  const deleteInvoice = (invoiceNumber: string) => {
    setIsLoading(true);
    return new Promise(resolve => {
      setInvoices(invoices.filter(invoice => invoice.number !== invoiceNumber));
      // fake delay
      setTimeout(() => {
        setIsLoading(false);
        resolve(invoiceNumber);
      }, 1000);
    });
  };

  const updateInvoice = (invoiceToUpdate: InvoiceSchema) => {
    setIsLoading(true);
    return new Promise(resolve => {
      setInvoices(
        invoices.map(invoice =>
          invoice.number === invoiceToUpdate.number ? invoiceToUpdate : invoice,
        ),
      );
      // fake delay
      setTimeout(() => {
        setIsLoading(false);
        resolve(invoiceToUpdate);
      }, 1000);
    });
  };

  return {
    isLoading,
    invoices,
    addInvoice,
    deleteInvoice,
    updateInvoice,
  };
}
