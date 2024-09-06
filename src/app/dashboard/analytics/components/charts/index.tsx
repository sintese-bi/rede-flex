import DailyFuel from "./daily_fuel";
import DailyProduct from "./daily_product";
import RegionFuel from "./region_fuel";
import RegionProduct from "./region_product";
export default async function DashboardComponentsCharts() {
  return (
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
  );
}
