import DashboardBigNumbers from "@/components/dashboard/dashboard/dashboard-bignumbers";
import DashboardMap from "@/components/dashboard/dashboard/dashboard-map";
import DashboardTable from "@/components/dashboard/dashboard/dashboard-table";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import LoadingBigNumbers from "./analytics/LoadingBigNumbers";
import LoadingMap from "./analytics/LoadingMap";
import LoadingTable from "./analytics/LoadingTable";
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
        <Suspense fallback={<LoadingTable title="Acompanhamento galonagem" />}>
          <DashboardTable
            title="Acompanhamento galonagem"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "UUID",
              "Qtd abastecimento",
              "Venda galonagem (R$)",
              "Venda produtos (R$)",
              "Venda calibragem (R$)",
              "Venda ducha (R$)",
              "Faturamento total (R$)",
              "Faturamento médio (R$)",
            ]}
            data={Array(10).fill(["_", "_", "_", "_", "_", "_", "_", "_"])}
          />
        </Suspense>
        <Suspense
          fallback={<LoadingTable title="Venda da galonagem por combustível" />}
        >
          <DashboardTable
            title="Venda da galonagem por combustível"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "UUID",
              "Gasolina C (R$)",
              "Etanol C (R$)",
              "S10 (R$)",
              "S500 (R$)",
              "GNV (R$)",
              "Gasolina Ad (R$)",
              "Etanol Ad (R$)",
              "Gasolina P (R$)",
              "S10 AD (R$)",
              "ARLA",
              "Faturamento total (R$)",
              "Faturamento médio (R$)",
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
              "_",
              "_",
            ])}
          />
        </Suspense>
        <Suspense
          fallback={<LoadingTable title="Volume vendido por combustível" />}
        >
          <DashboardTable
            title="Volume vendido por combustível"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "UUID",
              "Gasolina C (Litros)",
              "Etanol C (Litros)",
              "S10 (Litros)",
              "S500 (Litros)",
              "GNV (Litros)",
              "Gasolina Ad (Litros)",
              "Etanol Ad (Litros)",
              "Gasolina P (Litros)",
              "S10 AD (Litros)",
              "⁠Volume total (Litros)",
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
        <Suspense
          fallback={<LoadingTable title="Custo da galonagem por combustível" />}
        >
          <DashboardTable
            title="Custo da galonagem por combustível"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "UUID",
              "Gasolina C (R$)",
              "Etanol C (R$)",
              "S10 (R$)",
              "S500 (R$)",
              "GNV (R$)",
              "Gasolina Ad (R$)",
              "Etanol Ad (R$)",
              "Gasolina P (R$)",
              "S10 AD (R$)",
              "ARLA",
              "Custo total (R$)",
              "Custo médio (R$)",
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
              "_",
              "_",
            ])}
          />
        </Suspense>
        <Suspense
          fallback={<LoadingTable title="Lucro da galonagem por combustível" />}
        >
          <DashboardTable
            title="Lucro da galonagem por combustível"
            description="Listagem contendo as principais informações de cada posto!"
            columns={[
              "UUID",
              "Gasolina C (R$)",
              "Etanol C (R$)",
              "S10 (R$)",
              "S500 (R$)",
              "GNV (R$)",
              "Gasolina Ad (R$)",
              "Etanol Ad (R$)",
              "Gasolina P (R$)",
              "S10 AD (R$)",
              "ARLA",
              "Lucro total (R$)",
              "Lucro médio (R$)",
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
              "_",
              "_",
            ])}
          />
        </Suspense>
      </div>
    </div>
  );
}
