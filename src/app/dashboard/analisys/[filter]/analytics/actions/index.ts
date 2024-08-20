"use server";
import { DataInterfaces } from "../interfaces/data";
interface BigNumbers {
  CombustvelLucro: string;
  CustoTotal: number;
  LucroTotal: number;
  MelhorDia: string;
  VendaTotal: number;
  VolumeTotal: number;
  [key: string]: string | number; // Adiciona uma assinatura de índice
}

export async function bignumbersData(params: {
  init: string | undefined;
  end: string | undefined;
}): Promise<BigNumbers> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/bignumbers`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(params),
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch databaseall route response");
  let data = await response.json();
  for (const key of Object.keys(data)) {
    data[key] =
      typeof data[key] == "number"
        ? new Intl.NumberFormat("de-DE").format(data[key])
        : data[key];
  }
  return data;
}

export async function chartsData(params: {
  init: string | undefined;
  end: string | undefined;
}): Promise<{ LucroDia: []; LucroTempo: []; VolumeLucro: [] }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DATAFRAME_EXTERN_API}/graphics`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify(params),
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch databaseall route response");
  let data = await response.json();
  return data;
}
