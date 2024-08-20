import { format } from "date-fns";
import { DataInterfaces } from "../interfaces/data";
import { ProfitDateInterfaces } from "../interfaces/profit_date";
export default function getProfitAndDateUtils(data: DataInterfaces[]){
    let test: ProfitDateInterfaces[] = []
    data.map((dataItem: any) => {
        let fuelIndex: number = test.findIndex((testItem) => testItem.date == dataItem["company_date"])!
        if(fuelIndex == -1) {
            test.push({date: format(dataItem["company_date"], "dd/MM"), value: dataItem["company_profit"]})
        } else {
            let foundFuel = test[fuelIndex]
            test[fuelIndex] = {date: foundFuel["date"], value: foundFuel["value"] +  dataItem["company_profit"]}
        }   
    })  
    return test;
}