"use client";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import DashboardComponentsMap from "./analytics/components/map";
import DashboardComponentsBigNumbers from "./analytics/components/big_numbers";
import DashboardComponentsCharts from "./analytics/components/charts";
import DashboardComponentsTables from "./analytics/components/tables";
import {
  handleDashboardBigNumbers,
  handleDataframes,
  handleGeolocations,
} from "./analytics/actions";
import { BigNumbersInterfaces } from "./analytics/interfaces/big_numbers";
import ChartLoading from "./analytics/components/loading/chart";
import { DashboardContext } from "./analytics/context";
import SystemParameterizationModal from "./analytics/components/systemParameterizationModal";
function splitBigNumberIntoThree(
  big_numbers: BigNumbersInterfaces[],
  size: number = 3
) {
  const response: any = [];
  for (let i = 0; i < big_numbers.length; i += size) {
    response.push(big_numbers.slice(i, i + size));
  }
  return response;
}
export default function Dashboard() {
  const combRef = useRef<any>(null);
  const prodRef = useRef<any>(null);

  const [lowerThanAvarageCount, setLowerThanAvarageCount] = useState<any>(null);
  const [bigNumbers, setBigNumbers] = useState<any>(null);
  const [stationsMap, setStationsMap] = useState<any>(null);
  const [dataframes, setDataframes] = useState<any>(null);

  async function handleBigNumbers() {
    let response = await handleDashboardBigNumbers();
    localStorage.setItem("update_time", new Date().toDateString());
    const splitted_big_numbers = splitBigNumberIntoThree(response);
    setBigNumbers(splitted_big_numbers);
  }
  async function handleStationsMap() {
    let response = await handleGeolocations();
    setStationsMap(response);
  }
  async function handleDataframesData() {
    let response = await handleDataframes();
    setDataframes(response);
    setLowerThanAvarageCount(response.lowerThanAvarageCount);
  }
  async function updateDashboardData() {
    await Promise.all([
      handleBigNumbers(),
      handleStationsMap(),
      handleDataframesData(),
    ]);
  }
  function handleCombScroll() {
    console.log("executed");
    combRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  function handleProdScroll() {
    console.log("executed");
    prodRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    updateDashboardData();
    const intervalId = setInterval(updateDashboardData, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {}, [lowerThanAvarageCount]);

  if (!bigNumbers || !stationsMap || !dataframes || !lowerThanAvarageCount)
    return <ChartLoading />;

  return (
    <DashboardContext.Provider
      value={{
        combRef,
        prodRef,
        updateDashboardData,
        handleCombScroll,
        handleProdScroll,
      }}
    >
      <div className="flex flex-col gap-6 h-auto w-full">
        <div className="flex flex-col justify-end items-end">
          <SystemParameterizationModal />
        </div>
        <div className="flex justify-center w-full">
          <div className="lg:w-4/6 md:w-5/6 p-4 bg-main-color rounded-md text-center text-white text-sm">
            <p>
              Prezado usuário até o momento {lowerThanAvarageCount["M/LT"]}{" "}
              postos estão abaixo da M/LT médio da Rede.{" "}
              {lowerThanAvarageCount["TMP"]} postos estão com TMP abaixo da
              média da Rede.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 h-full w-full">
          <div className="flex w-full flex-col gap-12">
            <div className="flex flex-col items-center gap-2 w-full">
              <DashboardComponentsBigNumbers data={bigNumbers} />
              <DashboardComponentsMap data={stationsMap} />
            </div>
            <DashboardComponentsCharts />
            <DashboardComponentsTables data={dataframes} />
          </div>
          <Separator />
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
