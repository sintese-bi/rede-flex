"use client";
import { DataTable } from "./table";
import { handleDataframes } from "../../actions";
import { regional_gallonage } from "./columns/regional_gallonage";
import { regional_product } from "./columns/regional_product";
import { gallonage } from "./columns/gallonage";
import { product } from "./columns/product";
import { fuel } from "./columns/fuel";
import { group } from "./columns/group";
import { workers_gallonage } from "./columns/workers_gallonage";
import { workers_products } from "./columns/workers_products";
import { useEffect, useState } from "react";
import TableLoading from "../loading/table";
export default function DashboardComponentsTables() {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    async function fetch() {
      let response = await handleDataframes();
      setData(response);
    }
    fetch();
    const intervalId = setInterval(fetch, 4 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  if (!data) return <TableLoading />;
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable
        data={data.regional}
        columns={regional_gallonage}
        title="Acompanhamento regional galonagem"
        averageMeasure={`M/LT médio: ${data.regionalAvarageMLT} - TMC médio: ${data.regionalAvarageTMC} - TMV médio: ${data.regionalAvarageTMV}`}
      />
      <DataTable
        data={data.regional_produto}
        columns={regional_product}
        title="Acompanhamento regional produto"
        averageMeasure={`TMP médio: ${data.regionalAvarageTMP}`}
      />
      <DataTable
        data={data.galonagem}
        columns={gallonage}
        title="Acompanhamento galonagem"
        averageMeasure={`M/LT médio: ${data.stationAvarageMLT} - TMC médio: ${data.stationAvarageTMC} - TMV médio: ${data.stationAvarageTMV}`}
      />
      <DataTable
        data={data.produto}
        columns={product}
        title="Acompanhamento produtos"
        averageMeasure={`TMP médio: ${data.regionalAvarageTMP}`}
      />
      <DataTable
        data={data.combustivel}
        columns={fuel}
        title="Acompanhamento da venda de combustiveis"
        averageMeasure={`M/LT médio: ${data.stationAvarageMLT} - TMC médio: ${data.stationAvarageTMC} - TMV médio: ${data.stationAvarageTMV}`}
      />
      <DataTable
        data={data.grupo}
        columns={group}
        title="Acompanhamento da venda de produtos"
      />
      <DataTable
        data={data.frentista}
        columns={workers_gallonage}
        title="Acompanhamento da galonagem por frentista"
        averageMeasure={`M/LT médio: ${data.stationAvarageMLT} - TMC médio: ${data.stationAvarageTMC} - TMV médio: ${data.stationAvarageTMV}`}
      />
      <DataTable
        data={data.frentistaprod}
        columns={workers_products}
        title="Acompanhamento de produto por frenstita"
      />
    </div>
  );
}
