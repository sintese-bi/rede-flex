"use client";
import { DollarSignIcon, FuelIcon, PercentIcon } from "lucide-react";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
import { BigNumberFirstSection } from "./bigNumber/firstSection";
export default function DashboardComponentsBigNumber({
  label,
  value,
  secondary_label,
  secondary_value,
  third_value,
  fourth_label,
  fourth_value,
  fifth_label,
  fifth_value,
}: BigNumbersInterfaces) {
  return (
    <div className="flex h-[152px] lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4  rounded-lg bg-main-color items-center justify-between shadow-md">
      <div className="flex flex-col gap-4 w-full">
        <BigNumberFirstSection
          value={value}
          label={label}
          third_value={third_value}
        />
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
          <div className="flex justify-between gap-4 w-full ">
            {third_value !== undefined ? (
              <div className="flex gap-1">
                <p className="text-xs font-bold text-slate-400">
                  {fourth_label}
                </p>
                <p className={`text-xs font-bold text-white`}>{fourth_value}</p>
              </div>
            ) : null}
            {fifth_value !== undefined ? (
              <div className="flex gap-1">
                <p className="text-xs font-bold text-slate-400">
                  {fifth_label}
                </p>
                <p className={`text-xs font-bold text-white`}>{fifth_value}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
