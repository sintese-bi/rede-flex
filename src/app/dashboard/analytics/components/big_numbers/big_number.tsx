import { DollarSignIcon, FuelIcon } from "lucide-react";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
export default async function DashboardComponentsBigNumber({
  label,
  value,
  secondary_label,
  secondary_value,
}: BigNumbersInterfaces) {
  return (
    <div className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center">
      <div className="flex flex-col gap-1">
        <p className="lg:text-lg md:text-lg text-sm font-extrabold text-slate-400">
          {label}
        </p>
        <div className="flex items-center gap-1">
          {label.includes("Venda") ? (
            <DollarSignIcon
              className="lg:flex md:flex hidden text-slate-400"
              size={18}
            />
          ) : (
            <FuelIcon
              className="lg:flex md:flex hidden text-slate-400"
              size={18}
            />
          )}

          <p className="lg:text-lg md:text-md sm:text-sm font-bold text-slate-200">
            {value}
          </p>
        </div>
      </div>
      <div className="flex gap-1">
        <p className="text-xs font-bold text-slate-400">{secondary_label}</p>
        <p className="text-xs font-bold text-slate-200">{secondary_value}</p>
      </div>
    </div>
  );
}
