import dayjs from "dayjs";
import { z } from "zod";
import { zodRequiredString } from "./utils";

export const invoiceSchema = z.object({
  id: z.number().optional(),
  name: zodRequiredString("Name is required!"),
  number: zodRequiredString("Number is required!"),
  dueDate: z
    .any()
    .refine(date => date !== undefined && date !== null && date !== "", {
      message: "Due date is required",
    })
    .refine(date => dayjs(date).isValid(), {
      message: "Invalid date",
    }),
  amount: zodRequiredString("Amount is required!"),
  status: z.preprocess(
    val => (typeof val === "string" ? val.trim() : val),
    z.enum(["paid", "unpaid", "pending"], {
      errorMap: () => ({ message: "Status is required!" }),
    }),
  ),
});

export type InvoiceSchema = z.infer<typeof invoiceSchema>;
