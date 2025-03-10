import TableLoading from "../analytics/components/loading/table";
import { Suspense } from "react";
import LogsComponents from "./analytics/components/logs";
import AlertsTables from "./analytics/components/tables";
export default async function Alerts() {
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
