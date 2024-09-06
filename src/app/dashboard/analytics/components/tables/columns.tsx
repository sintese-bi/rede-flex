"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import RankingTable from "./children_tables/ranking_table";
import StationsTable from "./children_tables/stations_table";

export const ranking_columns: any[] = [
  {
    accessorKey: "User_id",
    header: "User_id",
  },
  {
    accessorKey: "name",
    header: "Frentista",
  },
  {
    accessorKey: "Venda",
    header: "Venda",
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Venda"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);
      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
];
export const gallonage_columns: any[] = [
  {
    accessorKey: "name",
    header: "Posto",
    cell: ({ row }: any) => <RankingTable row={row} type="galonagem" />,
  },
  {
    accessorKey: "Abastecimentos",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Abastecimentos
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "Faturamento",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Faturamento
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Faturamento"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
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

      return <div className="font-medium">{formatted} %</div>;
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
    accessorKey: "TMC",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMC
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMC"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "TMF",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMF
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMF"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "TMV",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMV
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMV"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">{formatted} L</div>;
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
  {
    accessorKey: "Posto_ibm",
    header: "Posto ibm",
  },
];
export const regional_columns: any[] = [
  {
    accessorKey: "name",
    header: "Regional",
    cell: ({ row }: any) => <StationsTable row={row} type="galonagem" />,
  },
  {
    accessorKey: "Abastecimentos",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Abastecimentos
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
  },
  {
    accessorKey: "Faturamento",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Faturamento
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("Faturamento"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
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

      return <div className="font-medium">{formatted} %</div>;
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
    accessorKey: "TMC",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMC
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMC"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "TMF",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMF
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMF"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "TMV",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMV
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMV"));
      const formatted = new Intl.NumberFormat("de-DE").format(amount);

      return <div className="font-medium">{formatted} L</div>;
    },
  },
  {
    accessorKey: "stations",
    header: "Postos",
  },
];
export const regional_product_columns: any[] = [
  {
    accessorKey: "name",
    header: "Regional",
    cell: ({ row }: any) => <StationsTable row={row} type="produto" />,
  },
  {
    accessorKey: "Abastecimentos",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Abastecimentos
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
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

      return <div className="font-medium">R$ {formatted}</div>;
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

      return <div className="font-medium">{formatted} %</div>;
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

      return <div className="font-medium">R$ {formatted}</div>;
    },
  },
  {
    accessorKey: "stations",
    header: "Postos",
  },
];
export const product_columns: any[] = [
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
    accessorKey: "TMC",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TMC
          <ArrowUpDownIcon className="ml-2 h-4 " />
        </Button>
      );
    },
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("TMC"));
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
    accessorKey: "Posto_ibm",
    header: "Posto ibm",
  },
];
