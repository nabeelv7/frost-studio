import db from "@/db";
import tableMap from "@/db/map";

export default async function TablePage({ params }) {
  const { name } = await params;

  const table = tableMap[name];

  if (!table) {
    return (
      <>
        <p>❌ Table not found.</p>
      </>
    );
  }

  const rows = await db.select().from(table);
  console.log({ rows });
}
