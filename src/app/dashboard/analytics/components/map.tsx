import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { handleGeolocations } from "../actions";
const Leaflet = dynamic(() => import("@/components/map/leaflet-map"), {
  ssr: false,
});
export default async function DashboardComponentsMap() {
  const data = await handleGeolocations();
  return (
    <div className="flex flex-col gap-2 lg:w-2/5 w-full rounded-lg h-full min-h-[342px]">
      <div className="flex items-center gap-2">
        <p className="flex items-center text-sm font-bold text-slate-600">
          Geocalização de postos
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircleIcon size={16} />
            </TooltipTrigger>
            <TooltipContent className="text-sm h-8" side="right">
              <p>Mapa com distribuição dos postos!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Separator />
      <div className="w-full h-full rounded-lg">
        <div className=" bg-slate-200 h-full w-full rounded-lg">
          <Leaflet data={data} />
        </div>
      </div>
    </div>
  );
}
