import { sql } from "drizzle-orm";
import db from ".";

export async function getTables() {
  let tables = await db.all(
    sql`SELECT name FROM sqlite_master WHERE type='table';`,
  );
  tables = tables.filter((table) => table.name !== "sqlite_sequence");
  return tables;
}
