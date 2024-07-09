"use server";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
export async function handleanalisysBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/analisys/big_numbers`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["analisys_big_numbers"],
      },
    }
  );
  if (!response.ok) {
    console.log(response.json());
  }
  return response.json();
}
