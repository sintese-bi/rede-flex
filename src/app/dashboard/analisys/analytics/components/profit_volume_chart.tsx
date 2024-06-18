"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import getProfitAndVolume from "../utils/get_profit_and_volume";
const Bubble = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bubble),
  {
    ssr: false,
  }
);
export default function ProfitVolumeChart({ data }: any) {
  const [datasetsValue, setDatasetsValue] = useState<
    { value: number; volume: number }[]
  >([]);
  useEffect(() => {
    setDatasetsValue(getProfitAndVolume(data));
  }, []);
  const chartData = {
    labels: datasetsValue.map((dataItem) => dataItem.volume),
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
      <p className="text-xs font-bold text-slate-800">Lucro x volume</p>
      <Bubble data={chartData} className="h-full w-full" />
    </div>
  );
}
