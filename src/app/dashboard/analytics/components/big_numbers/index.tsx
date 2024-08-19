import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
import { handleDashboardBigNumbers } from "../../actions";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
import DashboardComponentsBigNumber from "./big_number";
export default async function DashboardComponentsBigNumbers() {
  const big_numbers: BigNumbersInterfaces[] = await handleDashboardBigNumbers();
  return (
    <div className="flex flex-col gap-2 lg:w-3/5 w-full h-full lg:h-96">
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
      <Separator />
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 lg:grid-rows-2 md::grid-rows-2 grid-rows-3 h-full justify-center items-center">
        {big_numbers.map(
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
  );
}
