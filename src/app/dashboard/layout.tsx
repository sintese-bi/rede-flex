import DashboardComponentsNavbar from "./analytics/components/navbar";
import Realod from "./analytics/components/reload";
import Time from "./analytics/components/time";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex gap-6 lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-col lg:items-center md:items-center sm:items-center xs:items-start px-4 py-4 h-screen relative">
        <DashboardComponentsNavbar />
        <div className="flex flex-col justify-start items-start gap-4 h-full w-full py-4 overflow-auto px-2">
          <div className="flex items-center gap-4">
            <Time />
            <Realod />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
