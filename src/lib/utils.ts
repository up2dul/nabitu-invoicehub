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
