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
  return <div className="flex flex-col gap-12 h-full w-full"></div>;
}
