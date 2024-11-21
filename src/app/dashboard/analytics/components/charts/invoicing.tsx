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
import { handleDashboardInvoicingChart } from "../../actions";
import Chart from "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function Invoicing() {
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
      const response = await handleDashboardInvoicingChart({
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
    labels: data[filterVariable].map((item: any) => item.name),
    datasets: [
      {
        label: "Faturamento",
        data: data[filterVariable].map((item: any) => item.value),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(5, 176, 192)",
        tension: 0.1,
      },
      {
        label: "Faturamento meta",
        data: data[filterVariable].map((item: any) => Number(item.media)),
        fill: true,
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
    indexAxis: "y" as "x" | "y",
    scales: {
      x: {
        display: true,
      },
    },
  };
  const customPlugin = {
    id: "customPlugin",
    afterDatasetsDraw(chart: Chart) {
      const {
        ctx,
        data,
        scales: { x, y }, // Com os eixos invertidos, "x" será o valor numérico, "y" será categórico
      } = chart;

      const dataset1 = data.datasets[0].data;
      const dataset2 = data.datasets[1].data;

      dataset1.forEach((value1: any, index: any) => {
        const value2: any = dataset2[index];

        // Posição nos eixos invertidos
        const yPos = y.getPixelForValue(index); // Posição da label no eixo Y
        const xPos1 = x.getPixelForValue(value1); // Posição do valor 1 no eixo X
        const xPos2 = x.getPixelForValue(value2); // Posição do valor 2 no eixo X

        // Cálculo da porcentagem
        const divisionResult = ((value1 / value2) * 100).toFixed(); // Ex: 80%

        // Renderização do texto entre os valores no eixo invertido
        const labelXPos = Math.min(xPos1, xPos2) - 10; // Ajuste horizontal (para alinhar ao menor valor)
        ctx.save();
        ctx.font = "12px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        // Renderiza o texto no ponto apropriado
        ctx.fillText(`${divisionResult}%`, labelXPos, yPos);
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
          Gráfico faturamento mensal por posto
        </p>
        <Bar
          data={chartData}
          className="h-full w-full"
          plugins={[customPlugin]}
          options={options}
        />
      </div>
    </div>
  );
}
