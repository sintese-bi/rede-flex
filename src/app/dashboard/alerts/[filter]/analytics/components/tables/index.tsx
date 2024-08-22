import { DataTable } from "./table";
import { handleAlertsTable } from "../../actions";
import { columns } from "./columns";
export default async function AlertsTables() {
  const table = await handleAlertsTable();

  return (
    <div className="flex flex-col gap-12 pb-6 w-full">
      <DataTable columns={columns} data={table} />
    </div>
  );
}
