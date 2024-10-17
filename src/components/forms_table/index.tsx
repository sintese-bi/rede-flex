import { DataTable } from "./table";
interface FormsTableInterface {
  data: any;
  columns: any;
  visibility: any;
}
export default function FormsTable({
  data,
  columns,
  visibility,
}: FormsTableInterface) {
  return (
    <div className="flex flex-col gap-12 pb-6">
      <DataTable columns={columns} data={data} visibility={visibility} />
    </div>
  );
}
