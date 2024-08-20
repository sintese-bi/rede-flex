import { DataInterfaces } from "../interfaces/data";
export default function getFieldTotalValueUtils(fieldName: string, data: DataInterfaces[]) {
    return data.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + currentValue[fieldName],
      0
    );
  }