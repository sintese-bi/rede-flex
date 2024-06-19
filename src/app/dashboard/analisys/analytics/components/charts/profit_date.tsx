"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { DataInterfaces } from "../../interfaces/data";
import { ProfitDateInterfaces } from "../../interfaces/profit_date";
import getFuelProfitsUtils from "../../utils/get_fuel_profits";
import { ProfitFuelInterfaces } from "../../interfaces/profit_fuel";
import getProfitAndDateUtils from "../../utils/get_profit_and_date";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});
export default function ProfitDateChartsComponents({
  data,
}: {
  data: DataInterfaces[];
}) {
  const [datasetsValue, setDatasetsValue] = useState<ProfitDateInterfaces[]>(
    []
  );
  useEffect(() => {
    setDatasetsValue(getProfitAndDateUtils(data));
  }, []);
  const chartData = {
    labels: datasetsValue.map((dataItem) => dataItem.date),
    datasets: [
      {
        label: "Lucro",
        data: datasetsValue.map((dataItem) => dataItem.value),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return (
    <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 w-full">
      <p className="text-xs font-bold text-slate-800">Lucro x tempo</p>
      <Line data={chartData} className="h-full w-full" />
    </div>
  );
}
