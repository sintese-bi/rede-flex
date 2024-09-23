"use client";
import { DollarSignIcon, FuelIcon, PercentIcon } from "lucide-react";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
export default function DashboardComponentsBigNumber({
  label,
  value,
  secondary_label,
  secondary_value,
}: BigNumbersInterfaces) {
  return (
    <div className="flex flex-col gap-4 h-[120px] lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color justify-center shadow-md">
      <div className="flex flex-col gap-1">
        <p className="lg:text-md md:text-md text-sm font-extrabold text-slate-400">
          {label}
        </p>
        <div className="flex items-center gap-1">
          {label.includes("Lucro Bruto Operacional") ? (
            <>
              <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                {value}
              </p>
              <PercentIcon
                className="lg:flex md:flex hidden text-slate-400"
                size={18}
              />
            </>
          ) : label.includes("Venda") || label.includes("Lucro") ? (
            <>
              <DollarSignIcon
                className="lg:flex md:flex hidden text-slate-400"
                size={18}
              />
              <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                {value}
              </p>
            </>
          ) : label.includes("M/LT") ? (
            <>
              <p className="lg:flex md:flex hidden text-slate-400">$/L</p>
              <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                {value}
              </p>
            </>
          ) : (
            <>
              <FuelIcon
                className="lg:flex md:flex hidden text-slate-400"
                size={18}
              />
              <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                {value}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-1">
        <p className="text-xs font-bold text-slate-400">{secondary_label}</p>
        {secondary_label?.includes("Lucro Bruto Operacional") ? (
          <div className="flex items-center">
            <p className="text-xs font-bold text-slate-200">
              {secondary_value}
            </p>
            <PercentIcon
              className="lg:flex md:flex hidden text-slate-400"
              size={14}
            />
          </div>
        ) : (
          <p className="text-xs font-bold text-slate-200">{secondary_value}</p>
        )}
      </div>
    </div>
  );
}
