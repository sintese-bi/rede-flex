import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DataTable } from "../table";
import { ranking_columns } from "../columns";
import { useEffect, useState } from "react";
import { handleRankingByStation } from "../../../actions";

export default function RankingTable({
  row,
  type,
}: {
  row: any;
  type: string;
}) {
  const name = row.getValue("name");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await handleRankingByStation(row.original.Posto_ibm);
      setData(response);
    };
    fetch();
  }, [row.original.Posto_ibm]);

  return (
    <Sheet>
      <SheetTrigger>{name}</SheetTrigger>
      <SheetContent className="xl:w-[1000px] xl:max-w-none sm:w-[400px] sm:max-w-[540px] overflow-y-auto">
        <DataTable
          columns={ranking_columns}
          data={data}
          title={`Ranking de frentistas ${type} - ${name}`}
        />
      </SheetContent>
    </Sheet>
  );
}
