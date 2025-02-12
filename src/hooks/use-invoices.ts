import type { InvoiceSchema } from "@/lib/schemas";
import { useEffect, useState } from "react";
import { useLocalStorage } from "./use-local-storage";

type UseInvoicesType = Partial<{
  search: string;
  status: string;
}>;

const initialValue = {
  search: "",
  status: "",
};

/**
 * Custom hook for managing invoices with local storage and filtering capabilities.
 *
 * @param {object} [params] - The parameters for filtering invoices.
 * @param {string} [params.search] - A search term to filter invoices by name, case-insensitively.
 * @param {string} [params.status] - A status to filter invoices.
 * @returns {object} An object containing:
 *   - {@link InvoiceSchema}[] invoices - The list of filtered invoices.
 *   - {boolean} isLoading - Indicates whether an asynchronous operation is in progress.
 *   - {(newInvoice: InvoiceSchema) => Promise<InvoiceSchema>} addInvoice - Adds a new invoice and returns a promise that resolves with the added invoice.
 *   - {(invoiceNumber: string) => Promise<string>} deleteInvoice - Deletes an invoice by its number and returns a promise that resolves with the deleted invoice number.
 *   - {(invoiceToUpdate: InvoiceSchema) => Promise<InvoiceSchema>} updateInvoice - Updates an existing invoice and returns a promise that resolves with the updated invoice.
 */
export function useInvoices({
  search,
  status,
}: UseInvoicesType = initialValue) {
  const [invoices, setInvoices] = useLocalStorage<InvoiceSchema[]>(
    "invoices",
    [],
  );
  const [filteredInvoices, setFilteredInvoices] =
    useState<InvoiceSchema[]>(invoices);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFilteredInvoices(() => {
      return invoices.filter(invoice => {
        if (search && search !== "") {
          return invoice.name.toLowerCase().includes(search.toLowerCase());
        }
        if (status && status !== "") {
          return invoice.status === status;
        }
        return true;
      });
    });
  }, [invoices, search, status]);

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
    invoices: filteredInvoices,
    addInvoice,
    deleteInvoice,
    updateInvoice,
  };
}
