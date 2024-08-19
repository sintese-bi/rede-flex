import AnalisysComponentsHigherProfitCompany from "./analytics/components/higher_profit_company";
import AnalisysComponentsBigNumbers from "./analytics/components/big_numbers";
import AnalisysComponentsCharts from "./analytics/components/charts";
import AnalisysComponentsDataPicker from "./analytics/components/data_picker";
import { handleAnalisysChartsData } from "./analytics/actions";
import AnalisysComponentsFilter from "./components/filter";
export default async function Analisys() {
  const data = await handleAnalisysChartsData();
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <AnalisysComponentsFilter />
      <div className="flex flex-col gap-6 h-full w-full">
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col items-start gap-6">
          <AnalisysComponentsDataPicker />
          <AnalisysComponentsHigherProfitCompany data={data} />
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <AnalisysComponentsBigNumbers />
          <AnalisysComponentsCharts data={data} />
        </div>
      </div>
    </div>
  );
}
