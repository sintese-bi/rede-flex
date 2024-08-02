"use server";
import { mongodb_client } from "@/database/connection";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { ChartsInterfaces } from "../interfaces/charts";
import { ObjectId } from "mongodb";
import { apiRequestConfig, microServiceRequestConfig } from "@/utils";
export async function handleDashboardBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/sum-fuel-literage`,
    {
      headers: microServiceRequestConfig(),
      cache: "no-store",
    }
  );
  const {
    data,
  }: {
    data: {
      label: string;
      value: number;
      secondary_label: string;
      secondary_value: number;
    }[];
  } = await response.json();
  const formmatedNumbers = data.map((big_number) => {
    return {
      ...big_number,
      value: new Intl.NumberFormat("de-DE").format(big_number["value"]),
      secondary_value: new Intl.NumberFormat("de-DE").format(
        big_number["secondary_value"]
      ),
    };
  });
  return formmatedNumbers;
}
export async function handleDashboardCharts(): Promise<ChartsInterfaces[]> {
  const redeflex = mongodb_client.db("redeflex");
  const collection = redeflex.collection("dashboard");
  const { charts }: { charts: ChartsInterfaces[] } = (await collection.findOne({
    _id: new ObjectId("668953f2e6120c73f62c0a9c"),
  })) as any;
  return charts;
}

export async function handleGallonageTable() {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/dataframe-gallonage`,
    {
      headers: microServiceRequestConfig(),
      cache: "no-store",
    }
  );
  const { data } = await response.json();
  return data;
}

export async function handleGeolocations() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/map-position`,
    {
      headers: apiRequestConfig(),
      cache: "no-store",
    }
  );
  const { data } = await response.json();
  return data;
}
