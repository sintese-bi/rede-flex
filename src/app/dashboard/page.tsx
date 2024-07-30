import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import DashboardMap from "./analytics/components/map";
import TableLoading from "./analytics/components/loading/table";
import MapLoading from "./analytics/components/loading/map";
import BigNumbersLoading from "./analytics/components/loading/bignumbers";
import DashboardBigNumbers from "./analytics/components/big_numbers";
import Charts from "./analytics/components/charts";
import Tables from "./analytics/components/tables";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-6 h-full w-full">
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
      <div className="flex flex-col gap-12 h-full w-full">
        <div className="flex w-full flex-col gap-12">
          <div className="flex lg:flex-row flex-col items-center gap-2  w-full">
            <Suspense fallback={<BigNumbersLoading />}>
              <DashboardBigNumbers />
            </Suspense>
            <Suspense fallback={<MapLoading />}>
              <DashboardMap />
            </Suspense>
          </div>
          <Charts />
        </div>
        <Separator />
        <Suspense fallback={<TableLoading />}>
          <Tables />
        </Suspense>
      </div>
    </div>
  );
}
