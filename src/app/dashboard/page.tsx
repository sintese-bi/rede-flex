import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import DashboardMap from "./analytics/components/map";
import DashboardTable from "./analytics/components/table";
import TableLoading from "./analytics/components/loading/table";
import MapLoading from "./analytics/components/loading/map";
import BigNumbersLoading from "./analytics/components/loading/bignumbers";
import DashboardBigNumbers from "./analytics/components/big_numbers";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4">
        <Suspense fallback={<BigNumbersLoading />}>
          <DashboardBigNumbers />
        </Suspense>
        <Suspense fallback={<MapLoading />}>
          <DashboardMap />
        </Suspense>
      </div>
      <Separator />
      <div className="pb-6">
        <Suspense fallback={<TableLoading />}>
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
        <Suspense fallback={<TableLoading />}>
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
