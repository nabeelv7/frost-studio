import { seed } from "drizzle-seed";
import db from "@/db";
import { tasksTable, usersTable } from "./schema";

async function main() {
  await seed(db, { usersTable });
  await seed(db, { tasksTable });
}

main();
