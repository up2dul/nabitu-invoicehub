import * as schema from "@/drizzle/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export const client = new Pool({
  connectionString: process.env.DB_URL,
});

export const db = drizzle(client, { schema });
