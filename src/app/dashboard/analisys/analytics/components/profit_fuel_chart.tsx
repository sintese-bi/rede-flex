"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import getFuelProfits from "../utils/get_fuel_profits";
import getWeekDaysProfit from "../utils/get_week_days_profit";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function ProfitFuelChart({ data }: any) {
  const [datasetsValue, setDatasetsValue] = useState<
    { value: number; week_day: string }[]
  >([]);
  useEffect(() => {
    setDatasetsValue(getWeekDaysProfit(data));
  }, []);
  const chartData = {
    labels: datasetsValue.map((item) => item.week_day),
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
    <div className="h-full w-3/6">
      <p className="text-xs font-bold text-slate-800">Lucro x combustível</p>
      <Line data={chartData} className="h-full w-full" />
    </div>
  );
}
