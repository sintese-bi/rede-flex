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
export default function Region({ data }: { data: any }) {
  const { title, labels, datasets } = data;
  const [filterVariable, setFilterVariable] = useState<
    "Faturamento" | "Volume vendido" | "Custo" | "Margem combustível"
  >("Faturamento");
  const [filterDay, setFilterDay] = useState<
    | "segunda-feira"
    | "terça-feira"
    | "quarta-feira"
    | "quinta-feira"
    | "sexta-feira"
    | "sábado"
    | "domingo"
  >("segunda-feira");
  const [isLoading, setIsLoading] = useState(true);
  const filterVariableOptions: any = Object.keys(datasets[filterDay]);
  const filterDayOptions: any = Object.keys(datasets);
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
    labels: labels[filterDay],
    datasets: [
      {
        label: filterVariable,
        data: datasets[filterDay][filterVariable],
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
                      filter:
                        | "segunda-feira"
                        | "terça-feira"
                        | "quarta-feira"
                        | "quinta-feira"
                        | "sexta-feira"
                        | "sábado"
                        | "domingo",
                      index: number
                    ) => (
                      <SelectItem key={index} value={filter}>
                        {filter}
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
                      filter: "profit" | "sold_volume" | "cost" | "fuel_margin",
                      index: number
                    ) => (
                      <SelectItem key={index} value={filter}>
                        {filter}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="flex flex-col justify-center items-start h-full">
              <p className="text-xs font-bold text-slate-800 uppercase">
                {title}
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
