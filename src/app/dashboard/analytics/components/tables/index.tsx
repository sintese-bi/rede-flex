import { Suspense } from "react";
import DashboardTable from "./table";
import TableLoading from "../loading/table";
import { handleGallonageTable } from "../../actions";
export default async function DashboardComponentsTables() {
  const { galonagem, produto, regional } = await handleGallonageTable();
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DashboardTable
        title="Acompanhamento regional"
        description="Listagem contendo as principais informações de produto de cada região!"
        columns={Object.keys(regional[0])}
        data={regional.map((tableItem: any) => Object.values(tableItem))}
      />
      <DashboardTable
        title="Acompanhamento galonagem"
        description="Listagem contendo as principais informações de galonagem de cada posto!"
        columns={Object.keys(galonagem[0])}
        data={galonagem.map((tableItem: any) => Object.values(tableItem))}
      />
      <DashboardTable
        title="Acompanhamento produto"
        description="Listagem contendo as principais informações de produto de cada posto!"
        columns={Object.keys(produto[0])}
        data={produto.map((tableItem: any) => Object.values(tableItem))}
      />
    </div>
  );
}
