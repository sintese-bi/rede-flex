"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Suspense, useEffect, useReducer, useState } from "react";
import { DataInterfaces } from "../../interfaces/data";
import { ProfitDateInterfaces } from "../../interfaces/profit_date";
import getProfitAndDateUtils from "../../utils/get_profit_and_date";
import ChartLoading from "../../loading/chart";
import { delay } from "../../utils/component_delay";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

export default function ProfitDate({
  data,
}: {
  data: { lucro: number; tempo: string }[];
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
    labels: data.map((item) => item.tempo),
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
          <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 lg:w-3/6 md:w-3/6 sm:w-full xs:w-full w-full">
            <p className="text-xs font-bold text-slate-800">Lucro x tempo</p>
            <Line
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
