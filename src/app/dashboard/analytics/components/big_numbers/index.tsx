import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
import DashboardComponentsBigNumber from "./big_number";
import BigNumbersLoading from "../loading/bignumbers";
import OneSectionBigNumber from "./oneSectionBigNumber";
import TwoSectionBigNumber from "./twoSectionBigNumber";
import ThreeSectionBigNumber from "./threeSectionBigNumber";
function gettingSectionTitle(index: 0 | 1 | 2) {
  const sections = {
    0: "Visão Geral:",
    1: "Venda da Galonagem:",
    2: "Venda de Produtos:",
  };
  return sections[index];
}
export default function DashboardComponentsBigNumbers({ data }: { data: any }) {
  if (!data) return <BigNumbersLoading />;
  return (
    <div className="flex flex-col gap-2 lg:w-full w-full">
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
      {data.map(
        (big_numbers_section: BigNumbersInterfaces[], index: 0 | 1 | 2) => (
          <div key={index} className="flex flex-col gap-1 h-full">
            <p className="text-xs font-bold">{gettingSectionTitle(index)}</p>
            <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 h-full justify-center items-center">
              {big_numbers_section.map((bignumber, index) => {
                return (
                  <DashboardComponentsBigNumber
                    key={index}
                    label={bignumber.label}
                    value={bignumber.value}
                    secondary_label={bignumber.secondary_label}
                    secondary_value={bignumber.secondary_value}
                    third_value={bignumber.third_value}
                    fourth_label={bignumber.fourth_label}
                    fourth_value={bignumber.fourth_value}
                    fifth_label={bignumber.fifth_label}
                    fifth_value={bignumber.fifth_value}
                    seventh_label={bignumber.seventh_label}
                    seventh_value={bignumber.seventh_value}
                    sixth_label={bignumber.sixth_label}
                    sixth_value={bignumber.sixth_value}
                  />
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
}
