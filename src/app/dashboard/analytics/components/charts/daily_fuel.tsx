"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Suspense, useEffect, useState } from "react";
import { delay } from "../utils/component_delay";
import ChartLoading from "../loading/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import {
  handleDashboardDailyFuelChart,
  handleDashboardDailyStationChart,
} from "../../actions";
import { Button } from "@/components/ui/button";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function DailyFuel() {
  const [data, setData] = useState<any>(null);
  const [currentLevel, setCurrentLevel] = useState<"daily" | "station">(
    "daily"
  );
  const [clickedLabel, setClickedLabel] = useState<string>("");
  const [filterVariable, setFilterVariable] = useState<
    "volume_sold" | "invoicing"
  >("volume_sold");
  const [filterDay, setFilterDay] = useState<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | string
  >(format(new Date(), "EEEE"));

  const filterVariableOptions = [
    { variable: "volume_sold", label: "Galonagem" },
    { variable: "invoicing", label: "Faturamento" },
  ];
  const filterDayOptions = [
    { variable: "Sunday", label: "Domingo" },
    { variable: "Monday", label: "Segunda" },
    { variable: "Tuesday", label: "Terça" },
    { variable: "Wednesday", label: "Quarta" },
    { variable: "Thursday", label: "Quinta" },
    { variable: "Friday", label: "Sexta" },
    { variable: "Saturday", label: "Sábado" },
  ];
  useEffect(() => {
    if (data) {
      setData(null);
    }
    const fetch = async () => {
      const response =
        currentLevel == "daily"
          ? await handleDashboardDailyFuelChart({
              week_day: filterDay,
              variable_type: filterVariable,
            })
          : await handleDashboardDailyStationChart({
              week_day: clickedLabel,
              variable_type: filterVariable,
              filter: 1,
            });
      setData(response);
    };
    fetch();
    const intervalId = setInterval(fetch, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [filterVariable, filterDay, clickedLabel, currentLevel]);
  if (!data) return <ChartLoading />;
  const chartData = {
    labels:
      currentLevel == "daily" && Array.isArray(data)
        ? data.map((data_item: any) => data_item["date"])
        : Object.keys(data),
    datasets: [
      {
        label:
          filterVariableOptions.find((item) => item.variable === filterVariable)
            ?.label || "",
        data:
          currentLevel == "daily" && Array.isArray(data)
            ? data.map((data_item: any) => data_item["sum"])
            : Object.values(data),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    animation: {
      duration: 1500,
    },
    onClick: async (event: any, activeElements: any) => {
      if (activeElements.length > 0 && currentLevel !== "station") {
        const clickedElementIndex = activeElements[0].index;
        setClickedLabel(chartData.labels[clickedElementIndex]);
        setCurrentLevel("station");
      }
    },
    scales: {
      x: {
        display: false, // Desativa a exibição do eixo X
      },
    },
  };

  async function handlePreviousLevel() {
    setCurrentLevel("daily");
  }
  return (
    <div className="flex flex-col gap-2 h-full w-full ">
      <div className="flex w-full h-ful gap-2">
        <div className="flex gap-2">
          <Select
            name="variable"
            onValueChange={(value: any) => setFilterDay(value)}
            defaultValue={filterDay}
          >
            <SelectTrigger className="w-full text-xs w-[200px] h-8">
              <SelectValue placeholder="Dia da semana" />
            </SelectTrigger>
            <SelectContent side="bottom">
              {filterDayOptions.map(
                (
                  filter: { variable: string; label: string },
                  index: number
                ) => (
                  <SelectItem key={index} value={filter["variable"]}>
                    {filter["label"]}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Select
            name="variable"
            onValueChange={(value: any) => setFilterVariable(value)}
            defaultValue={filterVariable}
          >
            <SelectTrigger className="w-full text-xs w-[200px] h-8">
              <SelectValue placeholder="Variável" />
            </SelectTrigger>
            <SelectContent>
              {filterVariableOptions.map(
                (
                  filter: { variable: string; label: string },
                  index: number
                ) => (
                  <SelectItem key={index} value={filter["variable"]}>
                    {filter["label"]}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <Button
            className="text-xs h-8"
            disabled={currentLevel == "daily"}
            onClick={handlePreviousLevel}
          >
            Voltar
          </Button>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col justify-center items-start h-full">
        <p className="text-xs font-bold text-slate-800 uppercase">
          Gráfico diário combustível
        </p>
        <Bar data={chartData} className="h-full w-full" options={options} />
      </div>
    </div>
  );
}
