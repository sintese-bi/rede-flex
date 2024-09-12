import { DataTable } from "./table";
import { handleGallonageTable } from "../../actions";
import {
  combustivel_columns,
  gallonage_columns,
  product_columns,
  regional_columns,
  regional_product_columns,
} from "./columns";
export default async function DashboardComponentsTables() {
  const { galonagem, produto, regional, regional_produto, combustivel } =
    await handleGallonageTable();

  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable
        data={regional}
        columns={regional_columns}
        title="Acompanhamento regional galonagem"
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
      <DataTable
        data={combustivel}
        columns={combustivel_columns}
        title="Acompanhamento combustível"
      />
    </div>
  );
}
