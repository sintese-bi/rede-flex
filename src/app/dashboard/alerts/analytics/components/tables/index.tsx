import AlertsTable from "./table";
import { handleAlertsTable } from "../../actions";
export default async function AlertsTables() {
  const table = await handleAlertsTable();
  return (
    <div className="flex flex-col gap-12 pb-6 w-full">
      <AlertsTable
        title="Listagem de postos"
        description="Listagem para configurar os alertas"
        columns={Object.keys(table[0])}
        data={table.map((tableItem: any) => Object.values(tableItem))}
      />
    </div>
  );
}
