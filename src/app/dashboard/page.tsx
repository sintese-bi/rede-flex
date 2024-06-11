import DashboardBigNumbers from "@/components/dashboard/dashboard/dashboard-bignumbers";
import DashboardMap from "@/components/dashboard/dashboard/dashboard-map";
import DashboardTable from "@/components/dashboard/dashboard/dashboard-table";
export default async function Dashboard() {
  return (
    <div className="flex flex-col gap-12 h-full w-full">
      <div className="flex lg:flex-row md:flex-col flex-col items-center gap-4">
        <DashboardBigNumbers />
        <DashboardMap />
      </div>
      <div className="pb-6">
        <DashboardTable />
      </div>
    </div>
  );
}
