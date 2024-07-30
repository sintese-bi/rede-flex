import { handleGallonageTable } from "@/app/dashboard/analytics/actions";
import AlertsTable from "./table";
export default async function Tables() {
  return (
    <div className="flex flex-col gap-12 pb-6 w-full">
      <AlertsTable
        title="Listagem de postos"
        description="Listagem para configurar os alertas"
        columns={Array(8).fill("_")}
        data={Array(10).fill(Array(8).fill("_"))}
      />
    </div>
  );
}
