"use server";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { ChartsInterfaces } from "../interfaces/charts";
export async function handleDashboardBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/big_numbers`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["dashboard_big_numbers_data"],
      },
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  return response.json();
}
export async function handleDashboardCharts(): Promise<ChartsInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/charts`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["dashboard_charts"],
      },
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  return response.json();
}
