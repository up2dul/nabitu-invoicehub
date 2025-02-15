-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations

CREATE TYPE "public"."status" AS ENUM('paid', 'unpaid', 'pending');--> statement-breakpoint
CREATE TABLE "invoices" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "invoices_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"number" varchar(100) NOT NULL,
	"due_date" date NOT NULL,
	"amount" integer NOT NULL,
	"status" "status" NOT NULL
);
