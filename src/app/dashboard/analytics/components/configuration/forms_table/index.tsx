import FormsTable from "@/components/forms_table";
export default function FormsTableConfiguration({
  data,
  fields,
}: {
  data: any;
  fields: any;
}) {
  const visibility: any = {};
  fields.map((column: any) => {
    if (!column["isVisible"]) visibility[column["accessorKey"]] = false;
  });
  return <FormsTable data={data} columns={fields} visibility={visibility} />;
}
