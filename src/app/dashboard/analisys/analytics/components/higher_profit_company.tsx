import { Suspense } from "react";
import { DataInterfaces } from "../interfaces/data";
import getItemWithHigherProfitUtils from "../utils/get_item_with_higher_profit";
import HigherProfitCompanyLoading from "../loading/higher_profit_company";
export default async function HigherProfitCompany({
  data,
}: {
  data: DataInterfaces[];
}) {
  return (
    <Suspense fallback={<HigherProfitCompanyLoading />}>
      <div>
        <p className="text-md font-bold text-slate-400">
          Posto com maior lucro
        </p>
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-slate-400">
            {getItemWithHigherProfitUtils(data).company_name.toLowerCase()}
          </p>
          <p className="text-xs font-bold text-slate-400">
            {getItemWithHigherProfitUtils(data).company_profit}
          </p>
        </div>
      </div>
    </Suspense>
  );
}
