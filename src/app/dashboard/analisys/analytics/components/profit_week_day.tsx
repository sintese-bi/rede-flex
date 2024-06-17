"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import getFuelProfits from "../utils/get_fuel_profits";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function ProfitWeekDay({ data }: any) {
  const [datasetsValue, setDatasetsValue] = useState<
    { value: number; fuel: string }[]
  >([]);
  useEffect(() => {
    setDatasetsValue(getFuelProfits(data));
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
    <div className="h-full w-3/6">
      <p className="text-xs font-bold text-slate-800">Lucro x dia</p>
      <Line data={chartData} className="h-full w-full" />
    </div>
  );
}
