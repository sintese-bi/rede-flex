"use server";
import AnalisysComponentsFilter from "./station/analytics/components/filter";

export default async function AnalisysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-full">
      <AnalisysComponentsFilter />

      <div className="flex gap-6 lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-col lg:items-center md:items-center sm:items-center xs:items-start h-screen relative">
        <div className="flex flex-col justify-start items-start gap-4 h-full w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
