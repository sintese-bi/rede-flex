import { handleTMsAndBruteProfitPerRegionalUpdate } from "@/app/dashboard/analytics/actions";
import RowForm from "../forms_table/form";
export interface IRegionalsSectionsFields {
  accessorKey: string;
  header: string;
  cell?: any;
  isVisible: boolean;
  isInputField: boolean;
}
export const regionalsSectionsFields: {
  0: IRegionalsSectionsFields[];
  1: IRegionalsSectionsFields[];
  2: IRegionalsSectionsFields[];
} = {
  0: [
    {
      accessorKey: "id",
      header: "ID",
      isVisible: false,
      isInputField: false,
    },
    {
      accessorKey: "region_name",
      header: "Regional",
      cell: ({ row }: { row: any }) => {
        return <p className="min-w-[320px]">{row.original.region_name}</p>;
      },
      isVisible: true,
      isInputField: false,
    },
    {
      accessorKey: "mlt",
      header: "MLT (R$/L)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "tmp",
      header: "TMP (R$)",
      isVisible: false,
      isInputField: true,
    },
    //{
    //  accessorKey: "tmf",
    //  header: "TMF (R$)",
    //  isVisible: false,
    //  isInputField: true,
    //},
    {
      accessorKey: "tmc",
      header: "TMC (R$)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "tmvol",
      header: "TMVOL (L)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "tm_lucro_bruto_operacional",
      header: "LBO (%)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "tm_lucro_bruto_operacional_galonagem",
      header: "LBO galonagem (%)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "tm_lucro_bruto_operacional_produto",
      header: "LBO produto (%)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "form",
      header: "Configurar postos",
      cell: ({ row }: { row: any }) => {
        const row_values = { ...row.original };
        delete row_values["id"];
        delete row_values["region_name"];
        delete row_values["region_name"];
        return (
          <RowForm
            id={row.original.id}
            rowValues={row_values}
            updateFunction={handleTMsAndBruteProfitPerRegionalUpdate}
          />
        );
      },
      isVisible: true,
      isInputField: false,
    },
  ],
  1: [
    {
      accessorKey: "gasolina_comum",
      header: "Gasolina comum (L)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "etanol_comum",
      header: "Etanol comum (L)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "oleo_diesel_b_s500_comum",
      header: "Diesel S500 comum (L)",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "oleo_diesel_b_s10_comum",
      header: "Diesel S10 comum (L)",
      isVisible: false,
      isInputField: true,
    },
  ],
  2: [
    {
      accessorKey: "invoice_comb",
      header: "Faturamento combustível",
      isVisible: false,
      isInputField: true,
    },
    {
      accessorKey: "invoice_prod",
      header: "Faturamento produto",
      isVisible: false,
      isInputField: true,
    },
  ],
};
