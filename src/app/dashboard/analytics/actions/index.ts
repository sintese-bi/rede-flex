"use server";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
export async function handleDashboardBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dashboard/big_numbers`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["dashboard_big_numbers_data"],
      },
    }
  );
  if (!response.ok)
    throw new Error("erro na requisição dos valores dos big numbers");
  return response.json();
}
