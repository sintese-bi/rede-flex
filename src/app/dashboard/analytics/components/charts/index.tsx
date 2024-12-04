import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DailyFuel from "./daily_fuel";
import DailyProduct from "./daily_product";
import Invoicing from "./invoicing";
import RegionFuel from "./region_fuel";
import RegionProduct from "./region_product";
import { AlertCircleIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LinearInvoicing from "./linearInvoice";
import GrossDailyPerStation from "./grossDailyPerStation";
import GrossDaily from "./grossDaily";
export default function DashboardComponentsCharts() {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-slate-600">
              Metas diárias e mensais
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertCircleIcon size={16} />
                </TooltipTrigger>
                <TooltipContent className="text-sm" side="right">
                  <p>
                    Gráficos contento informação a nível de dia, posto, metas
                    diárias e mensais.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <Separator />
      </div>
      {/**
       * <GrossDaily />
       */}
      <GrossDailyPerStation />
      {/**
       * <LinearInvoicing />
       */}
      <Invoicing />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
          <RegionFuel />
        </div>
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
          <DailyFuel />
        </div>
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
          <RegionProduct />
        </div>
        <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
          <DailyProduct />
        </div>
      </div>
    </>
  );
}
