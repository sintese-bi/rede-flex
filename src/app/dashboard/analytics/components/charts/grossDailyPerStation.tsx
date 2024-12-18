"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { useEffect, useState } from "react";
import ChartLoading from "../loading/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { handleDashboardGrossDailyPerStation } from "../../actions";
import Chart from "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function GrossDailyPerStation() {
  const [data, setData] = useState<any>(null);
  const [filterVariable, setFilterVariable] = useState<"fuel" | "product">(
    "fuel"
  );
  const filterVariableOptions = {
    fuel: "Galonagem",
    product: "Produto",
  };
  useEffect(() => {
    if (data) {
      setData(null);
    }
    const fetch = async () => {
      const response = await handleDashboardGrossDailyPerStation({
        variable_type: filterVariable,
      });
      setData(response);
    };
    fetch();
    const intervalId = setInterval(fetch, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [filterVariable]);
  console.log(data);
  if (!data) return <ChartLoading />;
  const chartData = {
    labels: data
      .sort((a: any, b: any) => b.percentage - a.percentage)
      .map((item: any) => item.corporate_name),
    datasets: [
      {
        label: filterVariableOptions[filterVariable],
        data: data
          .sort((a: any, b: any) => b.percentage - a.percentage)
          .map(
            (item: any) =>
              item[
                `${
                  filterVariable == "fuel" ? "gallon" : "product"
                }_history_gross`
              ]
          ),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(5, 176, 192)",
        tension: 0.1,
      },
      {
        label: `${filterVariableOptions[filterVariable]} meta`,
        data: data
          .sort((a: any, b: any) => b.percentage - a.percentage)
          .map(
            (item: any) =>
              item[
                `${
                  filterVariable == "fuel" ? "gallon" : "product"
                }_history_gross_defined`
              ]
          ),
        fill: false,
        borderColor: "rgb(60, 153, 153)",
        backgroundColor: "rgb(0, 103, 115)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    animation: {
      duration: 1500,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        ticks: {
          callback: function (value: any) {
            const variable = filterVariableOptions[filterVariable];
            return variable != "Galonagem" ? `R$ ${value}` : `R$ ${value}`;
          },
        },
      },
    },
  };
  const customPlugin = {
    id: "customPlugin",
    afterDatasetsDraw(chart: Chart) {
      const {
        ctx,
        data,
        chartArea: { top, left, right, bottom, width, height },
        scales: { x, y },
      } = chart;

      const dataset1 = data.datasets[0].data;
      const dataset2 = data.datasets[1].data;

      // Loop through each data point to calculate and draw the custom value
      dataset1.forEach((value1: any, index: any) => {
        const value2: any = dataset2[index];
        const xPos = x.getPixelForValue(index); // X position of the bar
        const yPos1 = y.getPixelForValue(value1); // Y position of the first dataset
        const yPos2 = y.getPixelForValue(value2); // Y position of the second dataset

        const divisionResult = ((value1 / value2) * 100).toFixed(); // Calculate division and multiply by 100

        ctx.save();
        ctx.font = "12px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";

        // Render the calculated value above the higher of the two bars
        const labelYPos = Math.min(yPos1, yPos2) - 10;
        ctx.fillText(`${divisionResult}%`, xPos, labelYPos);
        ctx.restore();
      });
    },
  };
  return (
    <div className="flex flex-col gap-2 lg:h-full md:h-full sm:h-96 xs:h-96 h-96 w-full">
      <div className="flex gap-2">
        <Select
          name="variable"
          onValueChange={(value: any) => setFilterVariable(value)}
          defaultValue={filterVariable}
        >
          <SelectTrigger className="w-full text-xs w-[200px] h-8">
            <SelectValue placeholder="Filtro" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(filterVariableOptions).map((item: string, index) => (
              <SelectItem key={index} value={item}>
                {filterVariableOptions[item as "fuel" | "product"]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-start h-full">
        <p className="text-xs font-bold text-slate-800 uppercase">
          Resultado Bruto{" "}
          {filterVariableOptions[filterVariable] == "Galonagem"
            ? "da Galonagem"
            : "de Produto"}{" "}
          por Posto
        </p>
        <Bar
          data={chartData}
          className="h-full w-full"
          options={options}
          plugins={[customPlugin]}
        />
      </div>
    </div>
  );
}
