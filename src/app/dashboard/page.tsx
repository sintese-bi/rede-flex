import DashboardBigNumbers from "@/components/dashboard/dashboard/dashboard-bignumbers";
import DashboardMap from "@/components/dashboard/dashboard/dashboard-map";
import DashboardTable from "@/components/dashboard/dashboard/dashboard-table";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4">
        <DashboardBigNumbers />
        <DashboardMap />
      </div>
      <div className="pb-6">
        <DashboardTable
          title="Acompanhamento de galonagem - Ao vivo"
          description="Listagem contendo as principais informações de cada posto!"
          columns={[
            "Data",
            "Dia",
            "Abastecimento",
            "Galonagem",
            "Produtos",
            "Calibragem",
            "Ducha",
            "Faturamento",
          ]}
          data={Array(10).fill(["_", "_", "_", "_", "_", "_", "_", "_"])}
        />
        <DashboardTable
          title="Venda de combustíveis referente a galonagem - Ao vivo"
          description="Listagem contendo as principais informações de cada posto!"
          columns={[
            "Data",
            "Dia",
            "Gasolina C",
            "Etanol C",
            "S10",
            "S500",
            "GNV",
            "Gasolina Ad",
            "Etanol Ad",
            "Gasolina P",
            "S10 AD",
            "ARLA",
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
          ])}
        />
      </div>
    </div>
  );
}
