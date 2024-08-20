import { DataInterfaces } from "../interfaces/data";
import getFuelProfits from "./get_fuel_profits";
export default function getFuelWithHigherProfitUtils(data: DataInterfaces[]) {
    const fuels_profits = getFuelProfits(data)
    const higher_profit = Math.max(
        ...fuels_profits.map((item) => item["value"])
    );
    const fuel_with_higher_profit = fuels_profits.find(
      (item) => item["value"] == higher_profit
    )!;
    return fuel_with_higher_profit;
}