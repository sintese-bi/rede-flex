export default function getFieldTotalValue(fieldName: string, data: any) {
    return data.reduce(
      (accumulator: any, currentValue: any) =>
        accumulator + currentValue[fieldName],
      0
    );
  }