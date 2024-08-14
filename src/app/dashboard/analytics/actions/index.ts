"use server";
import { mongodb_client } from "@/database/connection";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { ChartsInterfaces } from "../interfaces/charts";
import { ObjectId } from "mongodb";
import { apiRequestConfig, microServiceRequestConfig } from "@/utils";
interface Data {
  label: string;
  value: number;
  secondary_label: string;
  secondary_value: number;
}
export async function handleDashboardBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/sum-fuel-literage`,
    {
      headers: microServiceRequestConfig(),
    }
  );
  const { data }: { data: Data[] } = await response.json();
  const formmatedNumbers = data.map((big_number) => {
    return {
      ...big_number,
      value: new Intl.NumberFormat("de-DE").format(big_number["value"]),
      secondary_value: big_number["secondary_value"]
        ? new Intl.NumberFormat("de-DE").format(big_number["secondary_value"])
        : "",
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
export async function handleDashboardDailyChart(params: {
  week_day: string;
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graphic`,
    {
      cache: "no-cache",
      headers: microServiceRequestConfig(),
      method: "POST",
      body: JSON.stringify(params),
    }
  );
  const { data } = await response.json();
  return data;
}
export async function handleDashboardRegionalChart(params: {
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-chart`,
    {
      cache: "no-cache",
      headers: microServiceRequestConfig(),
      method: "POST",
      body: JSON.stringify(params),
    }
  );
  const data = await response.json();
  return data;
}
export async function handleGallonageTable() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/dataframes`,
    {
      headers: microServiceRequestConfig(),
      cache: "no-store",
    }
  );
  const dataframes = await response.json();
  const galonagem = dataframes["galonagem"].map((item: any) => {
    return {
      Posto: item["Posto"],
      Abastecimentos: item["Abastecimentos"],
      "Galonagem(Litro)": item["Galonagem(Litro)"],
      Faturamento: item["Faturamento"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
    };
  });
  const produto = dataframes["produto"].map((item: any) => {
    return {
      Posto: item["Posto"],
      "Abastecimentos(Produto)": item["Abastecimentos(Produto)"],
      QtdProdutosVendidos: item["QtdProdutosVendidos"],
      "Valor Vendido": item["Valor Vendido"],
    };
  });
  const regional = dataframes["regional"].map((item: any) => {
    return {
      Regional: item["Regional"],
      Abastecimentos: item["Abastecimentos"],
      Faturamento: item["Faturamento"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
    };
  });
  return { galonagem, produto, regional };
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
  const formmatedNumbers = data.map((data_item: any) => {
    return {
      ...data_item,
      "Venda de Combustível": new Intl.NumberFormat("de-DE").format(
        data_item["Venda de Combustível"]
      ),
      "Produtos vendidos": new Intl.NumberFormat("de-DE").format(
        data_item["Produtos vendidos"]
      ),
      Galonagem: new Intl.NumberFormat("de-DE").format(data_item["Galonagem"]),
    };
  });
  return formmatedNumbers;
}
