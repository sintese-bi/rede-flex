"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useReducer, useState } from "react";
import getFuelProfits from "../utils/get_fuel_profits";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
function reducer(
  state: { value: number; fuel: string }[],
  action: { type: "string"; payload?: any }
): { value: number; fuel: string }[] {
  switch (action) {
    default:
      return state;
  }
}
export default function ProfitWeekDay({ data }: any) {
  const [state, dispatch] = useReducer(
    reducer,
    getFuelProfits(data) as { value: number; fuel: string }[]
  );
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
    <div className="lg:h-full md:h-full sm:h-96 xs:h-96 h-96 lg:w-3/6 md:w-3/6 sm:w-full xs:w-full w-full">
      <p className="text-xs font-bold text-slate-800">Lucro x dia</p>
      <Line data={chartData} className="h-full w-full" />
    </div>
  );
}
