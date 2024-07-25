import DataPicker from "./analytics/components/data_picker";
import BigNumbersComponents from "./analytics/components/big_numbers";
import ProfitFuelChartComponents from "./analytics/components/charts/profit_fuel";
import ProfitVolumeChartComponents from "./analytics/components/charts/profit_volume";
import ProfitDateChartComponents from "./analytics/components/charts/profit_date";
import ProfitDayChartsComponents from "./analytics/components/charts/profit_day";
import { DataInterfaces } from "./analytics/interfaces/data";
import HigherProfitCompany from "./analytics/components/higher_profit_company";
async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/databaseall`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch databaseall route response");
  return response.json();
}
export default async function Analisys() {
  const { data } = (await getData()) as { data: DataInterfaces[] };
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col items-start gap-6">
          <DataPicker />
          <HigherProfitCompany data={data} />
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <BigNumbersComponents />
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
