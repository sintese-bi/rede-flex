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
function reducer(
  state: ProfitDateInterfaces[],
  action: { type: "string"; payload?: any }
): ProfitDateInterfaces[] {
  switch (action) {
    default:
      return state;
  }
}
export default function ProfitDateChartsComponents({
  data,
}: {
  data: DataInterfaces[];
}) {
  const [state, dispatch] = useReducer(
    reducer,
    getProfitAndDateUtils(data) as ProfitDateInterfaces[]
  );
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
    labels: state.map((item) => item.date),
    datasets: [
      {
        label: "Lucro",
        data: state.map((item) => item.value),
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
          <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 w-full">
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
