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
  handleDashboardDailyProductChart,
  handleDashboardDailyStationChart,
} from "../../actions";
import { Button } from "@/components/ui/button";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

export default function DailyProduct() {
  const [data, setData] = useState<any>(null);
  const [currentLevel, setCurrentLevel] = useState<"daily" | "station">(
    "daily"
  );
  const [clickedLabel, setClickedLabel] = useState<string>("");
  const [filterVariable, setFilterVariable] =
    useState<"invoicing">("invoicing");
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
    const fetch = async () => {
      const response =
        currentLevel == "daily"
          ? await handleDashboardDailyProductChart({
              week_day: filterDay,
              variable_type: filterVariable,
            })
          : await handleDashboardDailyStationChart({
              week_day: clickedLabel,
              variable_type: filterVariable,
              filter: 0,
            });
      setData(response);
    };
    fetch();
    const intervalId = setInterval(fetch, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, [filterVariable, filterDay, clickedLabel, currentLevel]);
  if (!data) return <ChartLoading />;
  const chartData = {
    labels: data.map((data_item: any) => data_item["date"]),
    datasets: [
      {
        label: filterVariableOptions.filter(
          (item) => item["variable"] == filterVariable
        )[0]["label"],
        data: data.map((data_item: any) => data_item["sum"]),
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
      if (activeElements.length > 0) {
        const clickedElementIndex = activeElements[0].index;
        setClickedLabel(chartData.labels[clickedElementIndex]);
        setData(null);
        const response = await handleDashboardDailyStationChart({
          week_day: clickedLabel,
          variable_type: filterVariable,
          filter: 0,
        });
        setData(response);
        setCurrentLevel("station");
      }
    },
  };
  async function handlePreviousLevel() {
    setData(null);
    const dailyChart = await handleDashboardDailyProductChart({
      week_day: filterDay,
      variable_type: filterVariable,
    });
    setCurrentLevel("daily");
    setData(dailyChart);
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
            <SelectContent>
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
          Gráfico diário produto
        </p>
        <Bar data={chartData} className="h-full w-full" options={options} />
      </div>
    </div>
  );
}
