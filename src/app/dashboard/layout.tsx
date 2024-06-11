import Navbar from "@/components/dashboard/navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex gap-6 lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-col lg:items-center md:items-center sm:items-center xs:items-start px-4 py-4 h-screen relative">
        <Navbar />
        <div className="flex justify-center items-center h-full w-full py-4 overflow-auto px-2">
          {children}
        </div>
      </div>
    </section>
  );
}
