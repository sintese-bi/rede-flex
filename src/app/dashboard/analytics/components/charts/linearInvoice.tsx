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
import { handleDashboardLinearInvoicingChart } from "../../actions";
import Chart from "chart.js/auto";
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

export default function LinearInvoicing() {
  const [data, setData] = useState<any>(null);
  const [currentLevel, setCurrentLevel] = useState<"regional" | "station">(
    "regional"
  );
  const [clickedLabel, setClickedLabel] = useState<string>("");
  const [filterVariable, setFilterVariable] = useState<"comb" | "prod">("comb");
  const filterVariableOptions = [
    { variable: "comb", label: "Combustível" },
    { variable: "prod", label: "Produto" },
  ];

  useEffect(() => {
    if (data) {
      setData(null);
    }
    const fetch = async () => {
      const response = await handleDashboardLinearInvoicingChart({
        variable_type: filterVariable,
      });
      setData(response);
    };
    fetch();
    const intervalId = setInterval(fetch, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [filterVariable, clickedLabel, currentLevel]);

  if (!data) return <ChartLoading />;

  const chartData = {
    labels: data[filterVariable].labels,
    datasets: Object.keys(data[filterVariable].posto_nominal[0]).map(
      (posto, index) => {
        const postoData = data[filterVariable].posto_nominal[0][posto];
        return {
          label: posto,
          data: postoData,
          fill: false,
          tension: 0.1,
        };
      }
    ),
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
        beginAtZero: true,
      },
    },
  };

  const customPlugin = {
    id: "customPlugin",
    afterDatasetsDraw(chart: Chart) {
      const {
        ctx,
        scales: { x, y },
      } = chart;

      chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
        const postoName = dataset.label; // Nome do posto (chave do objeto)
        const datasetData = dataset.data;
        const postosPctData = data[filterVariable].postos_pct[0][postoName];

        // Certifique-se de que `postosPctData` existe
        if (!postosPctData) return;

        datasetData.forEach((value: number, index: number) => {
          const percentage = postosPctData[index]?.toFixed(2); // Pegando a porcentagem pronta

          if (percentage) {
            const xPos = x.getPixelForValue(index);
            const yPos = y.getPixelForValue(value);

            ctx.save();
            ctx.font = "12px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(`${percentage}%`, xPos, yPos - 10); // Renderizando o percentual acima do ponto
            ctx.restore();
          }
        });
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
            {filterVariableOptions.map(
              (filter: { variable: string; label: string }, index: number) => (
                <SelectItem key={index} value={filter["variable"]}>
                  {filter["label"]}
                </SelectItem>
              )
            )}
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-start h-full">
        <p className="text-xs font-bold text-slate-800 uppercase">
          Gráfico faturamento diário por posto
        </p>
        <Line
          data={chartData}
          className="h-full w-full"
          plugins={[customPlugin]}
          options={options}
        />
      </div>
    </div>
  );
}
