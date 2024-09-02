import { DataTable } from "./table";
import { handleGallonageTable } from "../../actions";
import {
  gallonage_columns,
  product_columns,
  regional_columns,
  regional_product_columns,
} from "./columns";

const data = [{ Custo: 300 }];
export default async function DashboardComponentsTables() {
  const { galonagem, produto, regional, regional_produto } =
    await handleGallonageTable();
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable
        data={regional}
        columns={regional_columns}
        title="Acompanhamento regional da galonagem"
      />
      <DataTable
        data={regional_produto}
        columns={regional_product_columns}
        title="Acompanhamento regional produto"
      />
      <DataTable
        data={galonagem}
        columns={gallonage_columns}
        title="Acompanhamento galonagem"
      />
      <DataTable
        data={produto}
        columns={product_columns}
        title="Acompanhamento produtos"
      />
    </div>
  );
}
