import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DataTable } from "../table";
import { product_columns } from "../columns";

export default function StationsTable({
  row,
  type,
}: {
  row: any;
  type: string;
}) {
  const name = row.getValue("name");
  return (
    <Sheet>
      <SheetTrigger>{name}</SheetTrigger>
      <SheetContent className="xl:w-[1000px] xl:max-w-none sm:w-[400px] sm:max-w-[540px] overflow-y-auto">
        <DataTable
          data={row.original.stations}
          columns={product_columns}
          title={`Acompanhamento ${type} - ${name}`}
        />
      </SheetContent>
    </Sheet>
  );
}
