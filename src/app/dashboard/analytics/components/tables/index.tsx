"use client";
import { DataTable } from "./table";
import { regional_gallonage } from "./columns/regional_gallonage";
import { regional_product } from "./columns/regional_product";
import { gallonage } from "./columns/gallonage";
import { product } from "./columns/product";
import { fuel } from "./columns/fuel";
import { group } from "./columns/group";
import { workers_gallonage } from "./columns/workers_gallonage";
import { workers_products } from "./columns/workers_products";
export default function DashboardComponentsTables({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable
        data={data.regional}
        columns={regional_gallonage}
        title="Acompanhamento regional galonagem"
        messageTitle=""
        averageMeasure={[
          { label: "M/LT médio (R$/L)", value: data.regionalAvarageMLT },
          { label: "TMC médio (R$)", value: data.regionalAvarageTMC },
          { label: "TMV médio (L)", value: data.regionalAvarageTMV },
        ]}
      />
      <DataTable
        data={data.regional_produto}
        columns={regional_product}
        title="Acompanhamento regional produto"
        messageTitle=""
        averageMeasure={[
          { label: "TMP médio (R$)", value: data.regionalAvarageTMP },
        ]}
      />
      <DataTable
        data={data.galonagem}
        columns={gallonage}
        title="Acompanhamento galonagem"
        messageTitle=""
        averageMeasure={[
          { label: "M/LT médio (R$/L)", value: data.stationAvarageMLT },
          { label: "TMC médio (R$)", value: data.stationAvarageTMC },
          { label: "TMV médio (L)", value: data.stationAvarageTMV },
        ]}
      />
      <DataTable
        data={data.produto}
        columns={product}
        title="Acompanhamento produtos"
        messageTitle=""
        averageMeasure={[
          { label: "TMP médio (R$)", value: data.regionalAvarageTMP },
        ]}
      />
      <DataTable
        data={data.combustivel}
        columns={fuel}
        title="Acompanhamento da venda de combustiveis"
        messageTitle="Soma total por combustível"
        averageMeasure={data.grupo_bignumbers}
      />
      <DataTable
        data={data.grupo}
        columns={group}
        title="Acompanhamento da venda de produtos"
        messageTitle="Soma total por grupo de produto"
        averageMeasure={data.grupo_produto_bignumbers}
      />
      <DataTable
        data={data.frentista}
        columns={workers_gallonage}
        messageTitle=""
        title="Acompanhamento da galonagem por frentista"
      />
      <DataTable
        data={data.frentistaprod}
        columns={workers_products}
        messageTitle=""
        title="Acompanhamento de produto por frenstita"
      />
    </div>
  );
}
