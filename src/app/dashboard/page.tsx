import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import DashboardMap from "./analytics/components/map";
import DashboardTable from "./analytics/components/table";
import TableLoading from "./analytics/components/loading/table";
import MapLoading from "./analytics/components/loading/map";
import BigNumbersLoading from "./analytics/components/loading/bignumbers";
import DashboardBigNumbers from "./analytics/components/big_numbers";
import Daily from "./analytics/components/charts/daily";
import { handleDashboardCharts } from "./analytics/actions";
import Region from "./analytics/components/charts/region";
export default async function Dashboard() {
  return <div className="flex flex-col gap-12 h-full w-full"></div>;
}
