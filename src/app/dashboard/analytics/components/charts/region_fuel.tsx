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
import {
  handleDashboardRegionalFuelChart,
  handleDashboardRegionalStationFuelChart,
} from "../../actions";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});
export default function RegionFuel() {
  const [data, setData] = useState<any>({
    "Regional 1": 0,
    "Regional 2": 0,
    "Regional 3": 0,
    "Regional 4": 0,
    "Regional 5": 0,
    "Regional Itaúna": 0,
  });
  const [filterVariable, setFilterVariable] = useState<
    "volume_sold" | "invoicing"
  >("volume_sold");
  const [isLoading, setIsLoading] = useState(true);
  const filterVariableOptions = [
    { variable: "volume_sold", label: "Galonagem" },
    { variable: "invoicing", label: "Faturamento" },
  ];
  useEffect(() => {
    delay(2200).then(() => {
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const regionChart = await handleDashboardRegionalFuelChart({
        variable_type: filterVariable,
      });
      setData(regionChart);
      setIsLoading(false);
    };
    fetchData();
  }, [filterVariable]);
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: filterVariableOptions.filter(
          (item) => item["variable"] == filterVariable
        )[0]["label"],
        data: Object.values(data),
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
        const clickedLabel = chartData.labels[clickedElementIndex];
        setIsLoading(true);
        const response = await handleDashboardRegionalStationFuelChart({
          regional_type: clickedLabel.replace(" ", "").toUpperCase(),
          variable_type: filterVariable,
        });
        setData(response);
        setIsLoading(false);
      }
    },
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
              defaultValue={filterVariable}
            >
              <SelectTrigger className="w-full text-xs w-[200px] h-8">
                <SelectValue placeholder="Filtro" />
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
            <Separator />
            <div className="flex flex-col justify-center items-start h-full">
              <p className="text-xs font-bold text-slate-800 uppercase">
                Gráfico regional combustível
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
