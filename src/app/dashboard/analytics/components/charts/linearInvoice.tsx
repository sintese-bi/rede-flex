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
  const [filterVariable, setFilterVariable] = useState<
    "fatCombustivel" | "fatProduto"
  >("fatCombustivel");
  const filterVariableOptions = [
    { variable: "fatCombustivel", label: "Combustível" },
    { variable: "fatProduto", label: "Produto" },
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

  // Cores personalizadas para os postos
  const colors = [
    "rgb(255, 99, 132)", // Cor para Posto 1
    "rgb(54, 162, 235)", // Cor para Posto 2
    "rgb(255, 206, 86)", // Cor para Posto 3
    "rgb(75, 192, 192)", // Cor para Posto 4
    "rgb(153, 102, 255)", // Cor para Posto 5
  ];

  const chartData = {
    labels: data.labels,
    datasets: Object.keys(data.postos).map((posto, index) => {
      const postoData = data.postos[posto];
      const meta = data.meta[posto]; // A meta do posto
      return {
        label: posto,
        data: postoData,
        fill: false,
        borderColor: colors[index % colors.length], // Atribuindo cor ao posto
        tension: 0.1,
        meta: meta, // Adicionando a meta ao dataset para uso no plugin customizado
      };
    }),
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
        chartArea: { top, left, right, bottom, width, height },
        scales: { x, y },
      } = chart;

      chart.data.datasets.forEach((dataset: any) => {
        const datasetData = dataset.data;
        const meta = dataset.meta;

        // Loop para cada ponto de dados do dataset
        datasetData.forEach((value: number, index: number) => {
          // Calculando a diferença percentual entre o valor real e a meta
          const percentage = ((value / meta[index]) * 100).toFixed(2); // Fórmula para calcular o percentual

          // Posição do ponto no gráfico
          const xPos = x.getPixelForValue(index);
          const yPos = y.getPixelForValue(value);

          ctx.save();
          ctx.font = "12px Arial";
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.fillText(`${percentage}%`, xPos, yPos - 10); // Renderizando o percentual acima do ponto
          ctx.restore();
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
