import { DataInterfaces } from "../interfaces/data";
import { ProfitFuelInterfaces } from "../interfaces/profit_fuel";
export default function getFuelProfitsUtils(data: DataInterfaces[]){
    let test: ProfitFuelInterfaces[] = []
    data.map((dataItem: any) => {
        let fuelIndex: number = test.findIndex((testItem) => testItem.fuel == dataItem["company_fuel"])!
        if(fuelIndex == -1) {
            test.push({fuel: dataItem["company_fuel"], value: dataItem["company_profit"]})
        } else {
            let foundFuel = test[fuelIndex]
            test[fuelIndex] = {fuel: foundFuel["fuel"], value: foundFuel["value"] +  dataItem["company_profit"]}
        }
       
    })    
    return test;
}