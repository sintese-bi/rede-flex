import Daily from "./daily";
import Region from "./region";
export default async function DashboardComponentsCharts() {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-12 w-full h-full">
      <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
        <Region />
      </div>
      <div className="flex items-center justify-center lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-full w-full">
        <Daily />
      </div>
    </div>
  );
}
