import { getTables } from "@/db/queries";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function SidebarTables() {
  const tables = await getTables();
  console.log(tables);

  return (
    <aside className="bg-base-300 w-1/5 p-5 bg-card">
      <ul className="flex flex-col">
        {/* <li>
          <Link href="/">Home</Link>
        </li>*/}
        {tables.map((table) => (
          <Table key={table.name} name={table.name} />
        ))}
      </ul>
    </aside>
  );
}

export function Table({ name }) {
  return (
    <li>
      <Link href={`/table/${name}`}>
        <Button variant="ghost" className="w-full">
          {name}
        </Button>
      </Link>
    </li>
  );
}
