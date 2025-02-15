"use server";

import { invoiceSchema } from "@/lib/schemas";
import { transformZodErrors } from "@/lib/utils";
import { addInvoice, updateInvoice } from "@/server/actions";
import { z } from "zod";

export async function submitForm(formData: FormData, mode: "add" | "update") {
  try {
    const validatedFields = invoiceSchema.parse(Object.fromEntries(formData));
    const parsedData = JSON.parse(JSON.stringify(validatedFields));

    // add invoice
    if (mode === "add") {
      const data = await addInvoice(parsedData);
      return {
        errors: null,
        data: JSON.parse(JSON.stringify(data)),
      };
    }

    // update invoice
    const data = await updateInvoice(parsedData);
    return {
      errors: null,
      data: JSON.parse(JSON.stringify(data)),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error),
        data: null,
      };
    }

    return {
      errors: {
        message: "An unexpected error occurred. Could not create invoice.",
      },
      data: null,
    };
  }
}
