import { DataTable } from "./table";
import { handleDataframes } from "../../actions";
import { regional_gallonage } from "./columns/regional";
import { regional_product } from "./columns/regional_product";
import { gallonage } from "./columns/gallonage";
import { product } from "./columns/product";
import { fuel } from "./columns/fuel";
import { group } from "./columns/group";
import { workers_gallonage } from "./columns/workers_gallonage";
import { workers_products } from "./columns/workers_products";
export default async function DashboardComponentsTables() {
  const {
    galonagem,
    produto,
    regional,
    regional_produto,
    combustivel,
    grupo,
    frentista,
    frentistaprod,
  } = await handleDataframes();
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable
        data={regional}
        columns={regional_gallonage}
        title="Acompanhamento regional galonagem"
      />
      <DataTable
        data={regional_produto}
        columns={regional_product}
        title="Acompanhamento regional produto"
      />
      <DataTable
        data={galonagem}
        columns={gallonage}
        title="Acompanhamento galonagem"
      />
      <DataTable
        data={produto}
        columns={product}
        title="Acompanhamento produtos"
      />
      <DataTable
        data={combustivel}
        columns={fuel}
        title="Acompanhamento combustível"
      />
      <DataTable data={grupo} columns={group} title="Acompanhamento grupo" />
      <DataTable
        data={frentista}
        columns={workers_gallonage}
        title="Acompanhamento frentista galonagem"
      />
      <DataTable
        data={frentistaprod}
        columns={workers_products}
        title="Acompanhamento frentista produtos"
      />
    </div>
  );
}
