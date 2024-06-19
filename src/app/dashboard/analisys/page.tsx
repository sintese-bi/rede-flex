import DataPicker from "./analytics/components/data_picker";
import getItemWithHigherProfit from "./analytics/utils/get_item_with_higher_profit";
import BigNumbersComponents from "./analytics/components/big_numbers";
import ProfitFuelChartComponents from "./analytics/components/charts/profit_fuel";
import ProfitVolumeChartComponents from "./analytics/components/charts/profit_volume";
import ProfitDateChartComponents from "./analytics/components/charts/profit_date";
import ProfitDayChartsComponents from "./analytics/components/charts/profit_day";
import { DataInterfaces } from "./analytics/interfaces/data";
async function getData() {
  const response = await fetch("http://159.65.42.225:3051/v1/databaseall", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch databaseall route response");
  }
  return response.json();
}
export default async function Analisys() {
  const { data } = (await getData()) as { data: DataInterfaces[] };
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-2">
            <DataPicker />
            <p className="text-xs font-bold text-slate-400">
              Defina o período de visualização dos dados
            </p>
          </div>
          <div>
            <p className="text-md font-bold text-slate-400">
              Posto com melhor lucro
            </p>
            <div className="flex items-center gap-2">
              <p className="text-xs font-bold text-slate-400">
                {getItemWithHigherProfit(data).company_name.toLowerCase()}
              </p>
              <p className="text-xs font-bold text-slate-400">
                {getItemWithHigherProfit(data).company_profit}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <BigNumbersComponents data={data} />
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
            <ProfitFuelChartComponents data={data} />
            <ProfitDayChartsComponents data={data} />
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
            <ProfitVolumeChartComponents data={data} />
            <ProfitDateChartComponents data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
