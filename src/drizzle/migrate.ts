import { client } from "@/drizzle/db";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

async function main() {
  await migrate(drizzle(client), {
    migrationsFolder: "./src/drizzle/migrations",
  });

  await client.end();
}

main();
