import { CalendarIcon, DollarSignIcon, FuelIcon } from "lucide-react";
import getFieldTotalValueUtils from "../utils/get_field_total_value";
import getFuelWithHigherProfitUtils from "../utils/get_fuel_with_higher_profit";
import getItemWithHigherProfitUtils from "../utils/get_item_with_higher_profit";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { DataInterfaces } from "../interfaces/data";
export default function BigNumbersComponents({
  data,
}: {
  data: DataInterfaces[];
}) {
  const bigNumbersData: BigNumbersInterfaces[] = [
    {
      value: new Intl.NumberFormat().format(
        getFieldTotalValueUtils("company_profit", data).toFixed(2)
      ),
      name: "company_profit",
      label: "Lucro total",
      icon: <DollarSignIcon className="text-slate-400" size={18} />,
    },
    {
      value: new Intl.NumberFormat().format(
        getFieldTotalValueUtils("company_volume", data).toFixed(2)
      ),
      name: "company_volume",
      label: "Volume total",
      icon: <FuelIcon className="text-slate-400" size={18} />,
    },
    {
      value: new Intl.NumberFormat().format(
        getFieldTotalValueUtils("company_cost", data).toFixed(2)
      ),
      name: "company_cost",
      label: "Custo total",
      icon: <DollarSignIcon className="text-slate-400" size={18} />,
    },
    {
      value: new Intl.NumberFormat().format(
        getFieldTotalValueUtils("company_sale", data).toFixed(2)
      ),
      name: "company_sale",
      label: "Venda total",
      icon: <DollarSignIcon className="text-slate-400" size={18} />,
    },
    {
      value: getFuelWithHigherProfitUtils(data).fuel.toLowerCase(),
      name: "fuel_with_higher_profit",
      label: "Melhor combustível",
      icon: <FuelIcon className="text-slate-400" size={18} />,
    },
    {
      value: getItemWithHigherProfitUtils(data).company_week_day.toLowerCase(),
      name: "week_day_with_higher_profit",
      label: "Melhor dia da semana",
      icon: <CalendarIcon className="text-slate-400" size={18} />,
    },
  ];
  return (
    <div className="flex flex-col gap-1 w-full h-72">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 h-72 justify-center items-center">
        {bigNumbersData.map((bigNumber: any, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color  justify-center"
          >
            <div className="flex flex-col gap-1">
              <p className="lg:text-lg md:text-lg text-sm font-extrabold text-slate-400">
                {bigNumber["label"]}
              </p>
              <div className="flex items-center gap-1">
                {bigNumber["icon"]}
                <p className="lg:text-md md:text-md text-sm font-bold text-slate-200">
                  {bigNumber["value"]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
