"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";

export const group: any[] = [
  {
    accessorKey: "name",
    header: "Grupo",
  },
  {
    accessorKey: "Posto",
    header: "Posto",
  },
  {
    accessorKey: "Produto",
    header: "Produto",
  },
  {
    accessorKey: "Cod Produto",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cod Produto
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Cod Produto"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
];
