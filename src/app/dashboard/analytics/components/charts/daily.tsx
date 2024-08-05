"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Suspense, useEffect, useReducer, useState } from "react";
import { delay } from "../utils/component_delay";
import ChartLoading from "../loading/chart";
import { ChartsInterfaces } from "../../interfaces/charts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Variable } from "lucide-react";
import { handleDashboardDailyChart } from "../../actions";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
function reducer(
  state: Array<any>,
  action: { type: "string"; payload?: any }
): Array<any> {
  switch (action) {
    default:
      return state;
  }
}
export default function Daily() {
  const [data, setData] = useState<{ date: string; sum: number }[]>([
    { date: "2024-08-02", sum: 10 },
  ]);
  const [filterVariable, setFilterVariable] = useState<
    "invoicing" | "volume_sold" | "cost" | "fuel_margin"
  >("invoicing");
  const [filterDay, setFilterDay] = useState<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >("Monday");
  const [isLoading, setIsLoading] = useState(true);
  const filterVariableOptions = [
    { variable: "invoicing", label: "Faturamento" },
    { variable: "volume_sold", label: "Volume vendido" },
    { variable: "cost", label: "Custo" },
    { variable: "fuel_margin", label: "Margem combustível" },
  ];
  const filterDayOptions = [
    { variable: "Sunday", label: "Domingo" },
    { variable: "Monday", label: "Segunda" },
    { variable: "Tuesday", label: "Terça" },
    { variable: "Wednesday", label: "Quarta" },
    { variable: "Thursday", label: "Quinta" },
    { variable: "Friday", label: "Sexta" },
    { variable: "Saturday ", label: "Sábado" },
  ];
  useEffect(() => {
    delay(2200).then(() => {
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const dailyChart = await handleDashboardDailyChart({
        week_day: filterDay,
        variable_type: filterVariable,
      });
      setData(dailyChart);
      setIsLoading(false);
    };

    fetchData();
  }, [filterVariable, filterDay]);
  const options = {
    animation: {
      duration: 1500,
    },
  };
  const chartData = {
    labels: data.map((data_item) => data_item["date"]),
    datasets: [
      {
        label: filterVariableOptions.filter(
          (item) => item["variable"] == filterVariable
        )[0]["label"],
        data: data.map((data_item) => data_item["sum"]),
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
        <Suspense fallback={<ChartLoading />}>
          <div className="flex flex-col gap-2 h-full w-full ">
            <div className="flex w-full h-ful gap-2">
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
            </div>
            <Separator />
            <div className="flex flex-col justify-center items-start h-full">
              <p className="text-xs font-bold text-slate-800 uppercase">
                {"Gráfico diário"}
              </p>
              <Bar
                data={chartData}
                className="h-full w-full"
                options={options}
              />
            </div>
          </div>
        </Suspense>
      )}
    </>
  );
}
