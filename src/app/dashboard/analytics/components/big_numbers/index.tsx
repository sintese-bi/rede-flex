"use client";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircleIcon, Rewind } from "lucide-react";
import { handleDashboardBigNumbers } from "../../actions";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
import DashboardComponentsBigNumber from "./big_number";
import { useEffect, useState } from "react";
function gettingSectionTitle(index: 0 | 1 | 2) {
  const sections = {
    0: "Visão Geral:",
    1: "Venda da Galonagem:",
    2: "Venda de Produtos:",
  };
  return sections[index];
}
async function splitBigNumberIntoThree(
  big_numbers: BigNumbersInterfaces[],
  size: number = 3
) {
  const response: any = [];
  for (let i = 0; i < big_numbers.length; i += size) {
    response.push(big_numbers.slice(i, i + size));
  }
  return response;
}
export default function DashboardComponentsBigNumbers() {
  const [bigNumbers, setBigNumbers] = useState<any>(null);
  useEffect(() => {
    async function fetchPosts() {
      let res = await handleDashboardBigNumbers();
      const splitted_big_numbers = await splitBigNumberIntoThree(res);
      setBigNumbers(splitted_big_numbers);
    }
    fetchPosts();
    const intervalId = setInterval(fetchPosts, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  if (!bigNumbers) return <div>Loading...</div>;
  return (
    <div className="flex flex-col gap-2 lg:w-3/5 w-full">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-slate-600">Flex Monitor</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AlertCircleIcon size={16} />
              </TooltipTrigger>
              <TooltipContent className="text-sm" side="right">
                <p>Informações gerais contabilizados!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Separator />
      {bigNumbers.map(
        (big_numbers_section: BigNumbersInterfaces[], index: 0 | 1 | 2) => (
          <div key={index} className="flex flex-col gap-1 h-full">
            <p className="text-xs font-bold">{gettingSectionTitle(index)}</p>
            <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 h-full justify-center items-center">
              {big_numbers_section.map(
                ({ label, value, secondary_label, secondary_value }, index) => (
                  <DashboardComponentsBigNumber
                    key={index}
                    label={label}
                    value={value}
                    secondary_label={secondary_label}
                    secondary_value={secondary_value}
                  />
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
