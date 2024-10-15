"use client";
import { Button } from "@/components/ui/button";
import RankingTable from "../children_tables/ranking_table";
import { ArrowUpDownIcon } from "lucide-react";

export const product: any[] = [
  {
    accessorKey: "name",
    header: "Posto",
    cell: ({ row }: any) => <RankingTable row={row} type="produto" />,
  },
  {
    accessorKey: "Abastecimentos(Produto)",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Abastecimentos
          <ArrowUpDownIcon className="ml-2 h-4" />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const name = row.getValue("Abastecimentos(Produto)");
      return <div className="font-medium text-center">{name}</div>;
    },
  },
  {
    accessorKey: "QtdProdutosVendidos",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Qtd vendidos
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const name = row.getValue("QtdProdutosVendidos");
      return <div className="font-medium text-center">{name}</div>;
    },
  },
  {
    accessorKey: "Valor Vendido",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Valor Vendido
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Valor Vendido"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);
      return <div className="font-medium text-center">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "Rendimento Bruto",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rendimento Bruto
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Rendimento Bruto"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium text-center">{formatted} %</div>;
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

      return <div className="font-medium text-center">R$ {formatted}</div>;
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

      return <div className="font-medium text-center">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "TMP",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMP
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMP"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium text-center">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "Última Atualizacao",
    header: "Última Atualização",
  },
  {
    accessorKey: "Posto_ibm",
    header: "Posto ibm",
  },
];
