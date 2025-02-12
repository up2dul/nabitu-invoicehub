import type { InvoiceSchema } from "@/lib/schemas";
import { z } from "zod";

/**
 * Returns a Zod string schema that validates non-empty strings.
 *
 * This function creates a Zod string schema that enforces a minimum length of 1, effectively marking the string as required.
 * If the validation fails (i.e., the string is empty), it returns a custom error message.
 *
 * @param message - A custom error message to be displayed when the string is empty. Defaults to "Required".
 * @returns A Zod schema for a non-empty string.
 */
export function zodRequiredString(message = "Required!") {
  return z.string({ required_error: message }).min(1, { message });
}

/**
 * Generates a new invoice number.
 *
 * This function creates a unique invoice number by prepending 'INV' to the current timestamp,
 * ensuring that each generated invoice number is distinct.
 *
 * @returns {string} The generated invoice number in the format 'INV<timestamp>'.
 */
export function generateInvoiceNumber(): string {
  const newInvoiceNumber = (+new Date()).toString();
  return `INV${newInvoiceNumber}`;
}

/**
 * Converts an ISO date string into a human-readable format  like "Feb 23, 2025".
 *
 * @param isoDate - The ISO date string to convert.
 * @returns The formatted date string.
 */
export function dateToReadable(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Returns a color configuration object containing a background color and a text color based on the invoice status.
 *
 * @param status - The status of the invoice. Valid statuses include "paid", "unpaid", and any other value for the default case.
 * @returns An object with properties:
 *  - bgColor: A string representing the background color in rgba format.
 *  - color: A string representing the text color as a hexadecimal value.
 */
export function getStatusColor(status: InvoiceSchema["status"]) {
  switch (status) {
    case "paid":
      return {
        bgColor: "rgba(33, 150, 83, 0.08)",
        color: "#219653",
      };
    case "unpaid":
      return {
        bgColor: "rgba(211, 64, 83, 0.08)",
        color: "#D34053",
      };
    default:
      return {
        bgColor: "rgba(255, 167, 11, 0.08)",
        color: "#FFA70B",
      };
  }
}
