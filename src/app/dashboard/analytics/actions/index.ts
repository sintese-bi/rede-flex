"use server";
import { mongodb_client } from "@/database/connection";
import { BigNumbersInterfaces } from "../interfaces/big_numbers";
import { ChartsInterfaces } from "../interfaces/charts";
import { ObjectId } from "mongodb";
import {
  apiRequestConfig,
  getAccessToken,
  microServiceRequestConfig,
} from "@/utils";
interface Data {
  label: string;
  value: number;
  secondary_label: string;
  secondary_value: number;
  third_value: boolean;
  fourth_value: number;
}
export async function handleDashboardBigNumbers(): Promise<
  BigNumbersInterfaces[]
> {
  const response = await fetch(
    `${
      process.env.NEXT_MICROSERVICE_MONGODB
    }/sum-fuel-literage/${getAccessToken()}`,
    {
      headers: microServiceRequestConfig(),
      cache: "no-cache",
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
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graphic-fuel`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const { data } = await response.json();
  return data;
}
export async function handleDashboardDailyProductChart(params: {
  week_day: string;
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graphic-product`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const { data } = await response.json();
  return data;
}
export async function handleDashboardRegionalFuelChart(params: {
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-chart-fuel`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const data = await response.json();
  return data;
}
export async function handleDashboardRegionalStationChart(params: {
  variable_type: string;
  regional_type: string;
  filter: number;
}): Promise<{ date: string; sum: number }[]> {
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-graph/${params.filter}`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const data = await response.json();
  return data;
}
export async function handleDashboardDailyStationChart(params: {
  variable_type: string;
  week_day: string;
  filter: number;
}): Promise<{ date: string; sum: number }[]> {
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/daily-graph/${params.filter}`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const data = await response.json();
  return data;
}
export async function handleDashboardRegionalProductChart(params: {
  variable_type: string;
}): Promise<{ date: string; sum: number }[]> {
  const url = `${process.env.NEXT_MICROSERVICE_MONGODB}/regional-chart-product`;
  const response = await fetch(url, {
    cache: "no-cache",
    headers: microServiceRequestConfig(),
    method: "POST",
    body: JSON.stringify(params),
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const data = await response.json();
  return data;
}
export async function handleDataframes() {
  const url = `${
    process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API
  }/dataframes?token=${getAccessToken()}`;
  const response = await fetch(url, {
    headers: microServiceRequestConfig(),
    cache: "no-store",
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const dataframes = await response.json();
  const regionalAvarageMLT = Number(
    dataframes["regionalGalonagemMLTMedio"]
  ).toFixed(2);
  const regionalAvarageTMP = Number(dataframes["regionalProdTMPMedio"]).toFixed(
    2
  );
  const regionalAvarageTMC = Number(dataframes["TMCMedioPosto"]).toFixed(2);
  const regionalAvarageTMV = Number(dataframes["TMVMedioRegional"]).toFixed(2);
  const stationAvarageMLT = Number(dataframes["MLTMedioPostos"]).toFixed(2);
  const stationAvarageTMP = Number(dataframes["TMPMedioPosto"]).toFixed(2);
  const stationAvarageTMC = Number(dataframes["TMCMedioPosto"]).toFixed(2);
  const stationAvarageTMV = Number(dataframes["TMVMedioPosto"]).toFixed(2);
  const combustivel = dataframes["combustivel"].map((item: any) => {
    return {
      name: item["Nome da Empresa"],
      Combustivel: item["Combustivel"],
      Venda: item["Venda"],
      Volume: item["Volume"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
    };
  });
  const grupo = dataframes["grupo"].map((item: any) => {
    return {
      name: item["Grupo"],
      Posto: item["Posto"],
      Produto: item["Produto"],
      Quantidade: item["Quantidade"],
      "Cod Produto": item["Cod Produto"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      Faturamento: item["Faturamento"],
    };
  });
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
      Indicador: item["Indicador"],
      Resultado: item["Resultado"],
      "Última Atualizacao": item["Última Atualizacao"],
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
      Indicador: item["Indicador"],
      Resultado: item["Resultado"],
      "Última Atualizacao": item["Última Atualizacao"],
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
      "M/LT": item["M/LT"],
      stations: galonagem.filter(
        (product_item: any) => product_item.regional == item["Regional"]
      ),
      Indicador: item["Indicador"],
      Resultado: item["Resultado"],
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
      Indicador: item["Indicador"],
      Resultado: item["Resultado"],
    };
  });
  const frentista = dataframes["frentista"].map((item: any) => {
    return {
      User_id: item["User_id"],
      name: item["Nome"],
      Regional: item["Regional"],
      Galonagem: item["Galonagem"],
      Venda: item["Venda"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      ibm: item["ibm"],
    };
  });
  const frentistaprod = dataframes["frentistaprod"].map((item: any) => {
    return {
      User_id: item["User_id"],
      name: item["Nome"],
      Regional: item["Regional"],
      Quantidade: item["Quantidade"],
      Venda: item["Venda"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      ibm: item["ibm"],
    };
  });
  const lowerThanAvarageCount = {
    "M/LT": galonagem.filter(
      (item: any) => Number(item["M/LT"]) < Number(stationAvarageMLT)
    ).length,
    TMP: produto.filter(
      (item: any) => Number(item["TMP"]) < Number(stationAvarageTMP)
    ).length,
  };
  return {
    galonagem,
    produto,
    regional,
    regional_produto,
    combustivel,
    grupo,
    frentista,
    frentistaprod,
    lowerThanAvarageCount,
    stationAvarageMLT,
    stationAvarageTMP,
    stationAvarageTMC,
    stationAvarageTMV,
    regionalAvarageMLT,
    regionalAvarageTMP,
    regionalAvarageTMC,
    regionalAvarageTMV,
  };
}
export async function handleGallonageRankingByStation(ibm: string) {
  const url = `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/ranking?ibm=${ibm}`;
  const response = await fetch(url, {
    headers: microServiceRequestConfig(),
    cache: "no-store",
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const { ranking } = await response.json();
  const formmatedRanking = ranking.map((item: any) => {
    return {
      ...item,
      name: item["Nome"],
      User_id: item["User_id"],
      Venda: item["Venda"],
      Galonagem: item["Galonagem"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMC: item["TMC"],
      TMF: item["TMF"],
      TMV: item["TMV"],
    };
  });
  return formmatedRanking;
}
export async function handleProductRankingByStation(ibm: string) {
  const url = `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/prodranking?ibm=${ibm}`;
  const response = await fetch(url, {
    headers: microServiceRequestConfig(),
    cache: "no-store",
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
    );
  const { ranking } = await response.json();
  const formmatedRanking = ranking.map((item: any) => {
    return {
      ...item,
      name: item["Nome"],
      User_id: item["User_id"],
      Venda: item["Venda"],
      Produtos: item["Produtos"],
      Custo: item["Custo"],
      Lucro: item["Lucro"],
      TMC: item["TMC"],
      TMP: item["TMP"],
    };
  });
  return formmatedRanking;
}
export async function handleGeolocations() {
  const url = `${
    process.env.NEXT_PUBLIC_EXTERN_API
  }/map-position/${getAccessToken()}`;
  const response = await fetch(url, {
    headers: apiRequestConfig(),
    cache: "no-store",
  });
  if (!response.ok)
    throw new Error(
      `Erro de ${
        response.statusText || "unknown"
      } ao fazer requisição na rota: ${url}`
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
export async function handleTMsAndBruteProfit() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/modal-return-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
export async function handleTMsAndBruteProfitUpdate(values: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/modal-insert-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
      method: "POST",
      body: JSON.stringify(values),
    }
  );
  const data = await response.json();
  return data;
}
export async function handleTMsAndBruteProfitPerStation() {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_EXTERN_API
    }/modal-station-return-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
    }
  );
  const data = await response.json();
  return data;
}
export async function handleTMsAndBruteProfitPerStationUpdate(params: any) {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_EXTERN_API
    }/modal-station-insert-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
      method: "POST",
      body: JSON.stringify(params),
    }
  );
  if (!response.ok) console.error(await response.text());
  const data = await response.json();
  return data;
}
export async function handleTMsAndBruteProfitPerRegional() {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_EXTERN_API
    }/modal-regions-return-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
    }
  );
  const data = await response.json();
  return data;
}
export async function handleTMsAndBruteProfitPerRegionalUpdate(params: any) {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_EXTERN_API
    }/modal-regions-insert-tm/${getAccessToken()}`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
      method: "POST",
      body: JSON.stringify(params),
    }
  );
  if (!response.ok) console.error(await response.text());
  const data = await response.json();
  return data;
}
