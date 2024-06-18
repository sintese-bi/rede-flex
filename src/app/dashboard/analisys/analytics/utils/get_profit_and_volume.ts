export default function getProfitAndVolume(data: any){
    let test: { value: number; volume: number }[] = []
    data.map((dataItem: any) => {
        let fuelIndex: number = test.findIndex((testItem) => testItem.volume == dataItem["company_volume"])!
        if(fuelIndex == -1) {
            test.push({volume: dataItem["company_volume"], value: dataItem["company_profit"]})
        } else {
            let foundFuel = test[fuelIndex]
            test[fuelIndex] = {volume: foundFuel["volume"], value: foundFuel["value"] +  dataItem["company_profit"]}
        }
       
    })  
    return test;
}