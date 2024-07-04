"use server";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
export async function handleanalisysBigNumbers(): Promise<
  BigNumbersInterfaces[] | undefined
> {
  try {
    const response = await fetch(
      `https://redeflexbi.com.br/api/dashboard/analisys/big_numbers`,
      {
        method: "GET",
        cache: "force-cache",
        next: {
          tags: ["analisys_big_numbers"],
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
