export default function getWeekDaysProfit(data: any){
    let test: { value: number; week_day: string }[] = []
    data.map((dataItem: any) => {
        let fuelIndex: number = test.findIndex((testItem) => testItem.week_day == dataItem["company_week_day"])!
        if(fuelIndex == -1) {
            test.push({week_day: dataItem["company_week_day"], value: dataItem["company_profit"]})
        } else {
            let foundFuel = test[fuelIndex]
            test[fuelIndex] = {week_day: foundFuel["week_day"], value: foundFuel["value"] +  dataItem["company_profit"]}
        }
       
    })  
    console.log(test);  
    return test;
}