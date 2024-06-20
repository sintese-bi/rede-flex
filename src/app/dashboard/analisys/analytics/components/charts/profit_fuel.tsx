"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useReducer, useState } from "react";
import { DataInterfaces } from "../../interfaces/data";
import getFuelProfitsUtils from "../../utils/get_fuel_profits";
import { ProfitFuelInterfaces } from "../../interfaces/profit_fuel";
import ChartLoading from "../../loading/chart";
import { delay } from "../../utils/component_delay";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
function reducer(
  state: ProfitFuelInterfaces[],
  action: { type: "string"; payload?: any }
): ProfitFuelInterfaces[] {
  switch (action) {
    default:
      return state;
  }
}
export default function ProfitFuelChartsComponents({
  data,
}: {
  data: DataInterfaces[];
}) {
  const [state, dispatch] = useReducer(
    reducer,
    getFuelProfitsUtils(data) as ProfitFuelInterfaces[]
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
    labels: state.map((item) => item.fuel),
    datasets: [
      {
        label: "Lucro",
        data: state.map((item) => item.value),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      {isLoading ? (
        <ChartLoading />
      ) : (
        <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 lg:w-3/6 md:w-3/6 sm:w-full xs:w-full w-full">
          <p className="text-xs font-bold text-slate-800">
            Lucro x combustível
          </p>
          <Line data={chartData} className="h-full w-full" options={options} />
        </div>
      )}
    </>
  );
}
