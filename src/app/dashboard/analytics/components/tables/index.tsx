import { Suspense } from "react";
import DashboardTable from "./table";
import TableLoading from "../loading/table";
import { handleGallonageTable } from "../../actions";
export default async function Tables() {
  const gallonageTable = await handleGallonageTable();
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DashboardTable
        title="Acompanhamento galonagem"
        description="Listagem contendo as principais informações de cada posto!"
        columns={Object.keys(gallonageTable[0])}
        data={gallonageTable.map((tableItem: any) => Object.values(tableItem))}
      />

      <DashboardTable
        title="Venda da galonagem por combustível"
        description="Listagem contendo as principais informações de cada posto!"
        columns={[
          "ID",
          "Data",
          "Dia",
          "Combustíveis",
          "Faturamento",
          "Faturamento médio",
          "Volume",
          "Custo",
          "Venda",
          "Lucro ",
        ]}
        data={Array(10).fill([
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
          "_",
        ])}
      />
    </div>
  );
}
