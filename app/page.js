import { getTables } from "@/db/queries";
import Link from "next/link";

export default async function HomePage() {
  const tables = await getTables();
  console.log(tables);

  return (
    <main>
      <ul>
        {tables.map((table) => (
          <Table key={table.name} name={table.name} />
        ))}
      </ul>
    </main>
  );
}

export function Table({ name }) {
  return (
    <li>
      <Link href={`/table/${name}`}>{name}</Link>
    </li>
  );
}
