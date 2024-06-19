"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import getWeekDaysProfitUtils from "../../utils/get_week_days_profit";
import { DataInterfaces } from "../../interfaces/data";
import getFuelProfitsUtils from "../../utils/get_fuel_profits";
import { ProfitFuelInterfaces } from "../../interfaces/profit_fuel";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function ProfitFuelChartsComponents({
  data,
}: {
  data: DataInterfaces[];
}) {
  const [datasetsValue, setDatasetsValue] = useState<ProfitFuelInterfaces[]>(
    []
  );
  useEffect(() => {
    setDatasetsValue(getFuelProfitsUtils(data));
  }, []);
  const chartData = {
    labels: datasetsValue.map((item) => item.fuel),
    datasets: [
      {
        label: "Lucro",
        data: datasetsValue.map((item) => item.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 lg:w-3/6 md:w-3/6 sm:w-full xs:w-full w-full">
      <p className="text-xs font-bold text-slate-800">Lucro x combustível</p>
      <Line data={chartData} className="h-full w-full" />
    </div>
  );
}
