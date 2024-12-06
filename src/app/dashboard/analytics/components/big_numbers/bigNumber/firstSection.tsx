import { DollarSignIcon, FuelIcon, PercentIcon } from "lucide-react";
export function BigNumberFirstSection({
  value,
  label,
  third_value,
}: {
  value: string;
  label: string;
  third_value: boolean;
}) {
  console.log(value, label, third_value);

  return (
    <div className="flex flex-col gap-1">
      <p className="lg:text-md md:text-md text-sm font-extrabold text-slate-400">
        {label}
      </p>
      {}
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
        ) : label.includes("Venda") ||
          label.includes("Lucro") ||
          label.includes("Faturamento") ? (
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
  );
}
