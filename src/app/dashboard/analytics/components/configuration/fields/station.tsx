import { Button } from "@/components/ui/button";
import { handleTMsAndBruteProfitPerStationUpdate } from "../../../actions";
import FormStation from "../form_stations/form";
import { ArrowUpDownIcon } from "lucide-react";
export function getStationsFields() {
  const station_fields = {
    first_section: [
      {
        accessorKey: "id",
        header: "ID",
        isVisible: false,
      },
      {
        accessorKey: "nome_fantasia",
        header: ({ column }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Posto
              <ArrowUpDownIcon className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: { row: any }) => {
          return <p className="min-w-[320px]">{row.original.nome_fantasia}</p>;
        },
        isVisible: true,
      },
      {
        accessorKey: "tmp",
        header: "TMP (R$)",
        isVisible: false,
      },
      {
        accessorKey: "tmf",
        header: "TMF (R$)",
        isVisible: false,
      },
      {
        accessorKey: "tmc",
        header: "TMC (R$)",
        isVisible: false,
      },
      {
        accessorKey: "tmvol",
        header: "TMVOL (L)",
        isVisible: false,
      },
      {
        accessorKey: "tm_lucro_bruto_operacional",
        header: "LBO (%)",
        isVisible: false,
      },
      {
        accessorKey: "tm_lucro_bruto_operacional_galonagem",
        header: "LBO galonagem (%)",
        isVisible: false,
      },
      {
        accessorKey: "tm_lucro_bruto_operacional_produto",
        header: "LBO produto (%)",
        isVisible: false,
      },
      {
        accessorKey: "form",
        header: "Configurar postos",
        cell: ({ row }: { row: any }) => {
          const row_values = { ...row.original };
          delete row_values["id"];
          delete row_values["nome_fantasia"];
          return (
            <FormStation
              id={row.original.id}
              rowValues={row_values}
              updateFunction={handleTMsAndBruteProfitPerStationUpdate}
            />
          );
        },
        isVisible: true,
      },
    ],
    second_section: [
      {
        accessorKey: "gasolina_comum",
        header: "Gasolina comum (L)",
        isVisible: false,
      },
      {
        accessorKey: "etanol_comum",
        header: "Etanol comum (L)",
        isVisible: false,
      },
      {
        accessorKey: "oleo_diesel_b_s500_comum",
        header: "Diesel S500 comum (L)",
        isVisible: false,
      },
      {
        accessorKey: "oleo_diesel_b_s10_comum",
        header: "Diesel S10 comum (L)",
        isVisible: false,
      },
    ],
  };
  function getAsColumns() {
    return station_fields.first_section.concat(station_fields.second_section);
  }
  function getAsFields() {
    const fields = { ...station_fields };
    const first_section = fields.first_section
      .filter(
        (fieldItem) =>
          !["form", "id", "nome_fantasia"].includes(fieldItem["accessorKey"])
      )
      .map((fieldItem) => fieldItem["accessorKey"]);
    const second_section = fields.second_section.map(
      (fieldItem) => fieldItem.accessorKey
    );
    return { first_section, second_section };
  }
  function getHeader(
    name: string,
    choosed_section: "first_section" | "second_section"
  ) {
    const section = station_fields[choosed_section];
    const section_item = section.filter(
      (sectionItem) => sectionItem["accessorKey"] == name
    )[0];
    return section_item["header"];
  }
  return { getAsColumns, getAsFields, getHeader };
}
