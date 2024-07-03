"use server";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
export async function handleanalisysBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
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
  if (!response.ok)
    throw new Error("erro na requisição dos big numbers de análise");
  return response.json();
}
