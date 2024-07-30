import Tables from "./analytics/components/tables";
import TableLoading from "../analytics/components/loading/table";
import { Suspense } from "react";
export default async function Alerts() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-start">
      <div className="flex lg:flex-row flex-col w-full lg:gap-4 gap-12">
        <Suspense fallback={<TableLoading />}>
          <Tables />
        </Suspense>

        {/**
         * <FormComponents
          handleAlertsVariables={handleAlertsVariables}
          handleAlertsVariablesSelect={handleAlertsVariablesSelect}
        />
         * <LogsComponents />
         */}
      </div>
    </div>
  );
}
