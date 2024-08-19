"use server";
import { mongodb_client } from "@/database/connection";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { ObjectId } from "mongodb";
import { DataInterfaces } from "../interfaces/data";
export async function handleAnalisysBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const redeflex = mongodb_client.db("redeflex");
  const collection = redeflex.collection("analisys");
  const { big_numbers }: { big_numbers: BigNumbersInterfaces[] } =
    (await collection.findOne({
      _id: new ObjectId("66873e8ba47db2d310066cfc"),
    })) as any;
  const formmatedNumbers = big_numbers.map((big_number) => {
    return {
      ...big_number,
      value:
        typeof big_number["value"] == "number"
          ? new Intl.NumberFormat("de-DE").format(big_number["value"])
          : big_number["value"],
    };
  });
  return formmatedNumbers;
}
export async function handleAnalisysChartsData(): Promise<DataInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/databaseall`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch databaseall route response");
  const { data } = await response.json();
  return data;
}
