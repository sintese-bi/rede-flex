"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
export const fuel: any[] = [
  {
    accessorKey: "name",
    header: "Nome da empresa",
  },
  {
    accessorKey: "Combustivel",
    header: "Combustível",
  },
  {
    accessorKey: "Venda",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Venda
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Venda"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "Volume",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Volume
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "Custo",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Custo
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Custo"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "Lucro",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lucro
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Lucro"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "Lucro Com Desconto",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lucro Com Desconto
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Lucro Com Desconto"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);
      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "M/LT",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          M/LT
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("M/LT"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);
      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
];
