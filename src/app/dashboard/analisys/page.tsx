import { Separator } from "@/components/ui/separator";
import BigNumbers from "./analytics/components/big-numbers";
import DataPicker from "./analytics/components/data-picker";
import ProfitFuelChart from "./analytics/components/profit_fuel_chart";
import ProfitWeekDay from "./analytics/components/profit_week_day";
import getItemWithHigherProfit from "./analytics/utils/get_item_with_higher_profit";
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
  const { data } = await getData();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="flex items-start gap-6">
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
          <BigNumbers data={data} />
          <div className="h-96 flex gap-2">
            <ProfitFuelChart data={data} />
            <ProfitWeekDay data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
