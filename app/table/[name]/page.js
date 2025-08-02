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
  console.log(Object.entries(rows));

  return (
    <ul className="flex flex-col gap-2 p-10">
      {rows.map((row) => (
        <Row key={row.id} row={row} />
      ))}
    </ul>
  );
}

export function Row({ row }) {
  return (
    <li className="bg-base-300 rounded-box p-5">
      <ul>
        <pre className="text-primary">{"{"}</pre>
        {Object.entries(row).map(([key, value]) => (
          <li key={key}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-primary font-medium">{key}:</span> {value}
            </p>
          </li>
        ))}
        <pre className="text-primary">{"}"}</pre>
      </ul>
    </li>
  );
}
