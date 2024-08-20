import { DataInterfaces } from "../interfaces/data";
export default function getItemWithHigherProfitUtils(data: DataInterfaces[]) {
    const higher_profit = Math.max(
      ...data.map((item: any) => item["company_profit"])
    );
    const { company_week_day, company_name, company_profit } = data.find(
      (item: any) => item["company_profit"] == higher_profit
    )!;
    return { company_name, company_week_day, company_profit };
  }