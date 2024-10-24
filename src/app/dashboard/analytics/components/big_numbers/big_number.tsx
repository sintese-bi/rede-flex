"use client";
import { DollarSignIcon, FuelIcon, PercentIcon } from "lucide-react";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
export default function DashboardComponentsBigNumber({
  label,
  value,
  secondary_label,
  secondary_value,
  third_value,
  fourth_value,
}: BigNumbersInterfaces) {
  return (
    <div className="flex h-[120px] lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color items-center justify-between  shadow-md">
      <div className="flex flex-col gap-4 ">
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
                <PercentIcon className="flex text-slate-400" size={18} />
              </>
            ) : label.includes("Venda") ||
              label.includes("Lucro") ||
              label.includes("Faturamento") ? (
              <>
                <DollarSignIcon className="flex text-slate-400" size={18} />
                <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                  {value}
                </p>
              </>
            ) : label.includes("M/LT") ? (
              <>
                <p className="flex text-slate-400">$/L</p>
                <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                  {value}
                </p>
              </>
            ) : (
              <>
                <FuelIcon className="flex text-slate-400" size={18} />
                <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                  {value}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <p className="text-xs font-bold text-slate-400">
              {secondary_label}
            </p>
            {secondary_label?.includes("Lucro Bruto Operacional") ? (
              <>
                <div
                  className={`flex items-center ${
                    third_value ? "text-green-200" : "text-red-200"
                  }`}
                >
                  <p className="text-xs font-bold">{secondary_value}</p>
                  <PercentIcon className="flex" size={14} />
                </div>
              </>
            ) : (
              <div>
                <p
                  className={`text-xs font-bold ${
                    third_value ? "text-green-200" : "text-red-200"
                  }`}
                >
                  {secondary_value}
                </p>
              </div>
            )}
          </div>
          {third_value !== undefined ? (
            <div className="flex gap-1">
              <p className="text-xs font-bold text-slate-400">Objetivo </p>
              <p className={`text-xs font-bold text-white`}>{fourth_value}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
