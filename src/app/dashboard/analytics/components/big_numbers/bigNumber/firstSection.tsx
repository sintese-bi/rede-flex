import { DollarSignIcon, FuelIcon, PercentIcon } from "lucide-react";
export function BigNumberFirstSection({
  value,
  label,
  third_value,
  eighth_label,
  eighth_value,
}: {
  value: string;
  label: string;
  third_value: boolean;
  eighth_label: string;
  eighth_value: string;
}) {
  return (
    <div className="flex justify-between w-full">
      <div className="space-y-1">
        <p className="lg:text-md md:text-md text-sm font-extrabold text-slate-400">
          {label}
        </p>
        <div className="flex items-center gap-1">
          {label.includes("Operacional") ? (
            <>
              <p
                className={`lg:text-md md:text-md sm:text-sm font-bold ${
                  third_value == true ? "text-green-200" : "text-red-200"
                }`}
              >
                {value}
              </p>
              <PercentIcon className="flex text-slate-400" size={18} />
            </>
          ) : label.includes("Venda") || label.includes("Faturamento") ? (
            <>
              <p className="flex font-extrabold text-sm text-slate-400">R$</p>
              <p className="lg:text-md md:text-md sm:text-sm font-bold text-slate-200">
                {value}
              </p>
            </>
          ) : label.includes("M/LT") ? (
            <>
              <p className="flex font-extrabold text-sm text-slate-400">R$/L</p>
              <p
                className={`lg:text-md md:text-md sm:text-sm font-bold ${
                  third_value == true ? "text-green-200" : "text-red-200"
                }`}
              >
                {value}
              </p>
            </>
          ) : label.includes("Resultado Bruto") ? (
            <>
              <p className="flex font-extrabold text-sm text-slate-400">R$</p>
              <p
                className={`lg:text-md md:text-md sm:text-sm font-bold ${
                  third_value == true ? "text-green-200" : "text-red-200"
                }`}
              >
                {value}
              </p>
            </>
          ) : label.includes("Lucro Bruto") ? (
            <>
              <p
                className={`lg:text-md md:text-md sm:text-sm font-bold ${
                  third_value == true ? "text-green-200" : "text-red-200"
                }`}
              >
                {value}
              </p>
              <PercentIcon className="flex text-slate-400" size={18} />
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
      <div className="space-y-1">
        <p className="lg:text-md md:text-md text-sm font-extrabold text-slate-400">
          {eighth_label}
        </p>
        <p className="lg:text-md md:text-md text-sm font-extrabold text-white">
          {eighth_value}
        </p>
      </div>
    </div>
  );
}
