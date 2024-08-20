"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Suspense, useEffect, useReducer, useState } from "react";
import getProfitAndVolumeUtils from "../../utils/get_profit_and_volume";
import { DataInterfaces } from "../../interfaces/data";
import { ProfitVolumeInterfaces } from "../../interfaces/profit_volume";
import ChartLoading from "../../loading/chart";
import { delay } from "../../utils/component_delay";

const Bubble = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bubble),
  {
    ssr: false,
  }
);

export default function ProfitVolume({
  data,
}: {
  data: { galonagem: number; lucro: number }[];
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    delay(2200).then(() => {
      setIsLoading(false);
    });
  }, []);
  const options = {
    animation: {
      duration: 1500,
    },
  };
  const chartData = {
    labels: data.map((item) => item.galonagem),
    datasets: [
      {
        label: "Lucro",
        data: data.map((item) => item.lucro),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return (
    <>
      {isLoading ? (
        <ChartLoading />
      ) : (
        <Suspense fallback={<ChartLoading />}>
          <div className="h-full w-full">
            <p className="text-xs font-bold text-slate-800">Lucro x volume</p>
            <Bubble
              data={chartData}
              className="h-full w-full"
              options={options}
            />
          </div>
        </Suspense>
      )}
    </>
  );
}
