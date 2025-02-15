import { date, integer, pgEnum, pgTable, varchar } from "drizzle-orm/pg-core";

export const invoiceStatus = pgEnum("status", ["paid", "unpaid", "pending"]);

export const invoices = pgTable("invoices", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: "invoices_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: varchar({ length: 255 }).notNull(),
  number: varchar({ length: 100 }).notNull(),
  dueDate: date("due_date").notNull(),
  amount: varchar({ length: 100 }).notNull(),
  status: invoiceStatus().notNull(),
});
