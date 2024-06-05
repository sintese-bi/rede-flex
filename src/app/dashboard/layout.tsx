import Navbar from "@/components/dashboard/navbar";
import { format } from "date-fns";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const datePattern = format(new Date(), "dd/MM/yyyy");
  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between w-full"></div>
      <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-col lg:items-center md:items-center sm:items-center xs:items-start px-4 py-4 h-screen relative">
        <Navbar />
        <div className="flex justify-center items-center h-full w-full py-4">
          {children}
        </div>
      </div>
    </section>
  );
}
