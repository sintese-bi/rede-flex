import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DataTable } from "../table";
import { ranking_gallonage_columns, ranking_product_columns } from "../columns";
import { useEffect, useState } from "react";
import {
  handleGallonageRankingByStation,
  handleProductRankingByStation,
} from "../../../actions";

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
      const response =
        type !== "produto"
          ? await handleGallonageRankingByStation(row.original.Posto_ibm)
          : await handleProductRankingByStation(row.original.Posto_ibm);
      setData(response);
    };
    fetch();
  }, [row.original.Posto_ibm, type]);

  return (
    <Sheet>
      <SheetTrigger>{name}</SheetTrigger>
      <SheetContent className="xl:w-[1000px] xl:max-w-none sm:w-[400px] sm:max-w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <DataTable
          columns={
            type !== "produto"
              ? ranking_gallonage_columns
              : ranking_product_columns
          }
          data={data}
          title={`Ranking de frentistas ${type} - ${name}`}
        />
      </SheetContent>
    </Sheet>
  );
}
