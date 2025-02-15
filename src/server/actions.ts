"use server";
import { db } from "@/drizzle/db";
import { invoices } from "@/drizzle/schema";
import { and, eq, ilike, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

type InferInvoice = typeof invoices.$inferSelect;
type InvoicesFilter = Partial<{
  search: string;
  status: string | InferInvoice["status"];
}>;

const filterInitialValue = {
  search: "",
  status: "",
};

export async function getInvoices({
  search = "",
  status = "",
}: InvoicesFilter = filterInitialValue) {
  // Validate the status against allowed values
  const validStatuses = ["paid", "unpaid", "pending"] as const;
  const isValidStatus = validStatuses.includes(
    status as InferInvoice["status"],
  );

  return await db
    .select()
    .from(invoices)
    .where(
      and(
        ilike(invoices.name, `%${search}%`),
        // Only apply status filter if valid, otherwise use neutral condition
        isValidStatus
          ? eq(invoices.status, status as InferInvoice["status"])
          : sql`1 = 1`, // Always true fallback
      ),
    );
}

export async function getInvoice(invoiceNumber: InferInvoice["number"]) {
  return await db
    .select()
    .from(invoices)
    .where(eq(invoices.number, invoiceNumber));
}

export async function addInvoice(newData: InferInvoice) {
  return await db.insert(invoices).values(newData);
}

export async function updateInvoice(updatedData: InferInvoice) {
  return await db
    .update(invoices)
    .set(updatedData)
    .where(eq(invoices.number, updatedData.number));
}

export async function deleteInvoice(invoiceNumber: InferInvoice["number"]) {
  await db.delete(invoices).where(eq(invoices.number, invoiceNumber));
  revalidatePath("/invoices/list");
}
