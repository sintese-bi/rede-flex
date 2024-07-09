import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import DashboardMap from "./analytics/components/map";
import DashboardTable from "./analytics/components/table";
import TableLoading from "./analytics/components/loading/table";
import MapLoading from "./analytics/components/loading/map";
import BigNumbersLoading from "./analytics/components/loading/bignumbers";
import DashboardBigNumbers from "./analytics/components/big_numbers";
import Daily from "./analytics/components/charts/daily";
import { handleDashboardCharts } from "./analytics/actions";
import Region from "./analytics/components/charts/region";
export default async function Dashboard() {
  const charts = await handleDashboardCharts();
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex w-full flex-col gap-12">
        <div className="flex lg:flex-row flex-col items-center gap-2  w-full">
          <Suspense fallback={<BigNumbersLoading />}>
            <DashboardBigNumbers />
          </Suspense>
          <Suspense fallback={<MapLoading />}>
            <DashboardMap />
          </Suspense>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-12 w-full h-full">
          <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
            <Daily data={charts[0]} />
          </div>
          <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
            <Region data={charts[1]} />
          </div>
        </div>
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
              "gasolina podium",
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
