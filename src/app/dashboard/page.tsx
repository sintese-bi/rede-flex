import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import DashboardComponentsMap from "./analytics/components/map";
import TableLoading from "./analytics/components/loading/table";
import MapLoading from "./analytics/components/loading/map";
import BigNumbersLoading from "./analytics/components/loading/bignumbers";
import DashboardComponentsBigNumbers from "./analytics/components/big_numbers";
import DashboardComponentsCharts from "./analytics/components/charts";
import DashboardComponentsTables from "./analytics/components/tables";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-6 h-auto w-full">
      <div className="flex flex-col gap-12 h-full w-full">
        <div className="flex w-full flex-col gap-12">
          <div className="flex lg:flex-row flex-col items-center gap-2  w-full">
            <Suspense fallback={<BigNumbersLoading />}>
              <DashboardComponentsBigNumbers />
            </Suspense>
            <Suspense fallback={<MapLoading />}>
              <DashboardComponentsMap />
            </Suspense>
          </div>
          <DashboardComponentsCharts />
        </div>
        <Separator />
        <Suspense fallback={<TableLoading />}>
          <DashboardComponentsTables />
        </Suspense>
      </div>
    </div>
  );
}
