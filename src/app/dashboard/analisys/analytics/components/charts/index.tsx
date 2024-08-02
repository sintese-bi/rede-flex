import { DataInterfaces } from "../../interfaces/data";
import AnalisysComponentsChartsProfitDate from "./profit_date";
import AnalisysComponentsChartsProfitDay from "./profit_day";
import AnalisysComponentsChartsProfitFuel from "./profit_fuel";
import AnalisysComponentsChartsProfitVolume from "./profit_volume";
export default async function AnalisysComponentsCharts({
  data,
}: {
  data: DataInterfaces[];
}) {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
        <AnalisysComponentsChartsProfitFuel data={data} />
        <AnalisysComponentsChartsProfitDay data={data} />
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
        <AnalisysComponentsChartsProfitVolume data={data} />
        <AnalisysComponentsChartsProfitDate data={data} />
      </div>
    </>
  );
}
