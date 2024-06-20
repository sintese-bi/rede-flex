import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import LoadingBigNumbers from "./analytics/components/loading/bignumbers";
import LoadingMap from "./analytics/components/loading/map";
import LoadingTable from "./analytics/components/loading/table";
import DashboardBigNumbers from "./analytics/components/dashboard/bignumbers";
import DashboardMap from "./analytics/components/dashboard/map";
import DashboardTable from "./analytics/components/dashboard/table";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4">
        <Suspense fallback={<LoadingBigNumbers />}>
          <DashboardBigNumbers />
        </Suspense>
        <Suspense fallback={<LoadingMap />}>
          <DashboardMap />
        </Suspense>
      </div>
      <Separator />
      <div className="pb-6">
        <Suspense fallback={<LoadingTable />}>
          <DashboardTable
            title="Acompanhamento galonagem"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "ID",
              "Data",
              "Dia",
              "Faturamento",
              "Faturamento médio ",
              "Qtd abastecimento",
              "Venda galonagem ",
              "Venda produtos ",
              "Venda calibragem ",
              "Venda ducha ",
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
        </Suspense>
        <Suspense fallback={<LoadingTable />}>
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
        </Suspense>
      </div>
    </div>
  );
}
