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
      header: "Lucro Bruto Operecional",
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
