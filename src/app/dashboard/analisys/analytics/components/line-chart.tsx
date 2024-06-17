"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});
export default function LineChart() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData({
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "GeeksforGeeks Line Chart",
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    });
  }, []);
  return (
    <div className="h-96 w-96">
      <p className="text-md font-bold">chart</p>
      <Line data={data} />
    </div>
  );
}
