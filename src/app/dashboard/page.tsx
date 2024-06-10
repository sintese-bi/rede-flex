import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import { AlertCircleIcon, DollarSignIcon, FuelIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Leaflet = dynamic(
  () => import("@/components/dashboard/map/leaflet-map"),
  {
    ssr: false,
  }
);
export default async function Dashboard() {
  return (
    <div className="h-full w-full">
      <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4">
        <div className="flex flex-col gap-2 w-full h-full lg:h-96">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-slate-600">
              Números principais
            </p>
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
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 grid-rows-2">
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">
                Venda de combustível
              </p>
              <div className="flex items-center gap-1">
                <DollarSignIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">120.230,02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">
                Venda de produtos
              </p>
              <div className="flex items-center gap-1">
                <DollarSignIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">20.230,02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">
                Venda de serviços
              </p>
              <div className="flex items-center gap-1">
                <DollarSignIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">18.230,02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">
                Volume de combustível
              </p>
              <div className="flex items-center gap-1">
                <FuelIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">130,02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">Despesas</p>
              <div className="flex items-center gap-1">
                <DollarSignIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">120.230,02</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color">
              <p className="text-xs font-bold text-slate-400">
                Volume de combustível
              </p>
              <div className="flex items-center gap-1">
                <FuelIcon className="text-slate-400" size={18} />
                <p className="text-lg font-bold text-slate-200">230,02</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full  rounded-lg h-96">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold text-slate-600">
              Destribuição de postos
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertCircleIcon size={16} />
                </TooltipTrigger>
                <TooltipContent className="text-sm" side="right">
                  <p>Mapa com distribuição dos postos!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Separator />
          <div className="w-full h-full rounded-lg">
            <div className=" bg-slate-200 h-full w-full rounded-lg">
              <Leaflet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
