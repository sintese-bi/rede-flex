import { Suspense } from "react";
import AlertsTables from "./analytics/components/tables";
import LogsComponents from "./analytics/components/logs";
import TableLoading from "../../analytics/components/loading/table";

export default async function Alerts({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col w-full h-full justify-start items-start">
      <div className="flex flex-col w-full lg:gap-4 gap-12">
        <Suspense fallback={<TableLoading />}>
          <AlertsTables />
        </Suspense>
        <LogsComponents />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return ["station", "regional"];
}
