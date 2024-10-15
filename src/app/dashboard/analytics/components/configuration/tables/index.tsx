import { DataTable } from "./table";
import { columns } from "./columns";
import { handleTMsAndBruteProfitPerStation } from "../../../actions";
export default async function SetupTable() {
  const data = await handleTMsAndBruteProfitPerStation();
  return (
    <div className="flex flex-col gap-12 pb-6 w-full">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
