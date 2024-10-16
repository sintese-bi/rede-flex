import FormsTable from "@/components/forms_table";
import FormStation from "./form";
export default function FormStationsConfiguration({
  data,
  wantsToViewTMs,
}: {
  data: any;
  wantsToViewTMs: boolean;
}) {
  const visibility = {
    id: false,
    tmp: false,
    tmf: false,
    tmc: false,
    tmvol: false,
    tm_lucro_bruto_operacional: false,
    tm_lucro_bruto_operacional_galonagem: false,
    tm_lucro_bruto_operacional_produto: false,
    etanol_comum: false,
    gasolina_comum: false,
    oleo_diesel_b_s10_comum: false,
    oleo_diesel_b_s500_comum: false,
  };
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "nome_fantasia",
      header: "Posto",
      cell: ({ row }: { row: any }) => {
        return <p className="min-w-[320px]">{row.original.nome_fantasia}</p>;
      },
    },
    {
      accessorKey: "tmp",
      header: "TMP",
    },
    {
      accessorKey: "tmf",
      header: "TMF",
    },
    {
      accessorKey: "tmc",
      header: "TMC",
    },
    {
      accessorKey: "tmvol",
      header: "TMVOL",
    },
    {
      accessorKey: "tm_lucro_bruto_operacional",
      header: "LBO",
    },
    {
      accessorKey: "tm_lucro_bruto_operacional_galonagem",
      header: "LBO galonagem",
    },
    {
      accessorKey: "tm_lucro_bruto_operacional_produto",
      header: "LBO produto",
    },
    {
      accessorKey: "gasolina_comum",
      header: "Gasolina comum",
    },
    {
      accessorKey: "etanol_comum",
      header: "Etanol comum",
    },
    {
      accessorKey: "oleo_diesel_b_s500_comum",
      header: "Diesel S500 comum",
    },
    {
      accessorKey: "oleo_diesel_b_s10_comum",
      header: "Diesel S10 comum",
    },
    {
      accessorKey: "",
      header: "Configurar postos",
      cell: ({ row }: { row: any }) => {
        const fields = { ...row.original };
        delete fields["id"];
        delete fields["nome_fantasia"];
        return (
          <FormStation
            id={row.original.id}
            fields={fields}
            wantsToViewTMs={wantsToViewTMs}
          />
        );
      },
    },
  ];

  return <FormsTable data={data} columns={columns} visibility={visibility} />;
}
