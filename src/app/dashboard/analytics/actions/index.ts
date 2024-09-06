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
export async function handleDashboardDailyFuelChart(params: {
  week_day: string;
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graphic-fuel`,
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
export async function handleDashboardDailyProductChart(params: {
  week_day: string;
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graphic-product`,
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
export async function handleDashboardRegionalFuelChart(params: {
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-chart-fuel`,
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

export async function handleDashboardRegionalProductChart(params: {
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const response = await fetch(
    `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-chart-product`,
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
      name: item["Posto"],
      regional: item["Regional"],
      Abastecimentos: item["Abastecimentos"],
      "Galonagem(Litro)": item["Galonagem(Litro)"],
      Faturamento: item["Faturamento"],
      "Rendimento Bruto": item["Rendimento Bruto"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMC: item["TMC"],
      TMF: item["TMF"],
      TMV: item["TMV"],
      "M/LT": item["M/LT"],
      Posto_ibm: item["Posto_ibm"],
    };
  });
  const produto = dataframes["produto"].map((item: any) => {
    return {
      name: item["Posto"],
      regional: item["Regional"],
      "Abastecimentos(Produto)": item["Abastecimentos(Produto)"],
      QtdProdutosVendidos: item["QtdProdutosVendidos"],
      "Valor Vendido": item["Valor Vendido"],
      "Rendimento Bruto": item["Rendimento Bruto"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMC: item["TMC"],
      TMP: item["TMP"],
      Posto_ibm: item["Posto_ibm"],
    };
  });
  const regional = dataframes["regional"].map((item: any) => {
    return {
      name: item["Regional"],
      Abastecimentos: item["Abastecimentos"],
      Faturamento: item["Faturamento"],
      "Rendimento Bruto": item["Rendimento Bruto"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMC: item["TMC"],
      TMF: item["TMF"],
      TMV: item["TMV"],
      stations: galonagem.filter(
        (product_item: any) => product_item.regional == item["Regional"]
      ),
    };
  });
  const regional_produto = dataframes["regional_produto"].map((item: any) => {
    return {
      name: item["Regional"],
      Abastecimentos: item["Abastecimentos(Produto)"],
      QtdProdutosVendidos: item["QtdProdutosVendidos"],
      "Valor Vendido": item["Valor Vendido"],
      "Rendimento Bruto": item["Rendimento Bruto"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMP: item["TMP"],
      stations: produto.filter(
        (product_item: any) => product_item.regional == item["Regional"]
      ),
    };
  });
  return { galonagem, produto, regional, regional_produto };
}

export async function handleRankingByStation(ibm: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/ranking?ibm=${ibm}`,
    {
      headers: microServiceRequestConfig(),
      cache: "no-store",
    }
  );
  const { ranking } = await response.json();
  const formmatedRanking = ranking.map((item: any) => {
    return {
      ...item,
      name: item["Nome"],
      User_id: item["User_id"],
      Venda: item["Venda"],
    };
  });
  return formmatedRanking;
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
