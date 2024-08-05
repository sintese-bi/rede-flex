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
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function Region({ data }: { data: any }) {
  const { title, labels, datasets } = data;
  const filterOptions: any = Object.keys(datasets);
  const [filterVariable, setFilterVariable] = useState<
    "Faturamento" | "Volume vendido" | "Custo" | "Margem combustível"
  >("Faturamento");
  const [isLoading, setIsLoading] = useState(true);
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
    labels,
    datasets: [
      {
        label: filterVariable,
        data: datasets[filterVariable],
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
          <div className="flex flex-col gap-2 lg:h-full md:h-full sm:h-96 xs:h-96 h-96 w-full">
            <Select
              name="variable"
              onValueChange={(value: any) => setFilterVariable(value)}
            >
              <SelectTrigger className="w-full text-xs w-[200px] h-8">
                <SelectValue placeholder="Filtro" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.map(
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
