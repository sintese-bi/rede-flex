import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircleIcon, DollarSignIcon } from "lucide-react";
export default async function DashboardBigNumbers() {
  return (
    <div className="flex flex-col gap-2 w-full h-full lg:h-96">
      <div className="flex items-center gap-4">
        <p className="text-sm font-bold text-slate-600">Números principais</p>
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
        <Select>
          <SelectTrigger className="text-xs w-[200px] h-8">
            <SelectValue placeholder="Tipo de filtro" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general" className="text-xs">
              Geral
            </SelectItem>
            <SelectItem value="regional" className="text-xs">
              regional
            </SelectItem>
            <SelectItem value="rank" className="text-xs">
              posto
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 h-full justify-center items-center">
        <div className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color  justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">120.230,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">M/LT</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">20.230,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">TM VOL</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">18.230,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">TMP</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">130,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">TMS</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">120.230,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">TMD</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full py-4 lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
          <p className="text-lg font-black text-slate-400">LUCRO BRUTO</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <DollarSignIcon className="text-slate-400" size={18} />
              <p className="text-md font-bold text-slate-200">230,02</p>
            </div>
            <p className="text-xs font-bold text-slate-400">TMF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
