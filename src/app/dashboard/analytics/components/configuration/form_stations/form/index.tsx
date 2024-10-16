import { handleTMsAndBruteProfitPerStationUpdate } from "@/app/dashboard/analytics/actions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import FormStationField from "./field";
const fields_first_section: {
  name:
    | "mlt"
    | "tmc"
    | "tmf"
    | "tmp"
    | "tmvol"
    | "tm_lucro_bruto_operacional"
    | "tm_lucro_bruto_operacional_galonagem"
    | "tm_lucro_bruto_operacional_produto";
  label: string;
}[] = [
  {
    name: "mlt",
    label: "MLT (R$/L)",
  },
  {
    name: "tmc",
    label: "TMC (R$)",
  },
  {
    name: "tmf",
    label: "TMF (R$)",
  },
  {
    name: "tmp",
    label: "TMP (R$)",
  },
  {
    name: "tmvol",
    label: "TMVOL (L)",
  },
  {
    name: "tm_lucro_bruto_operacional",
    label: "LBO",
  },
  {
    name: "tm_lucro_bruto_operacional_galonagem",
    label: "LBO galonagem",
  },
  {
    name: "tm_lucro_bruto_operacional_produto",
    label: "LBO produto",
  },
];
const fields_second_section: {
  name:
    | "gasolina_comum"
    | "etanol_comum"
    | "oleo_diesel_b_S500_comum"
    | "oleo_diesel_b_S10_comum";
  label: string;
}[] = [
  {
    name: "gasolina_comum",
    label: "Gasolina comum",
  },
  {
    name: "etanol_comum",
    label: "Etanol comum",
  },
  {
    name: "oleo_diesel_b_S500_comum",
    label: "Diesel S500 comum",
  },
  {
    name: "oleo_diesel_b_S10_comum",
    label: "Diesel S10 comum",
  },
];
export default function FormStation({
  id,
  fields,
  wantsToViewTMs,
}: {
  id: string;
  fields: any;
  wantsToViewTMs: boolean;
}) {
  async function onSubmit(form: FormData) {
    const first_section_fields: any = fields_first_section.map(
      (fieldItem) => fieldItem.name
    );
    const second_section_fields: any = fields_second_section.map(
      (fieldItem) => fieldItem.name
    );
    const total_fields = first_section_fields.concat(second_section_fields);
    const values: Record<any, number> = {};
    total_fields.forEach(
      (field: any) => (values[field] = Number(form.get(field)) || 0)
    );
    const response = await handleTMsAndBruteProfitPerStationUpdate(values, id);
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  function FirstSection() {
    return fields_first_section.map((fieldItem, index) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <FormStationField
            defaultValue={fields[fieldItem.name] || 0}
            name={fieldItem.name}
            label={fieldItem.label}
            key={index}
          />
        </div>
      );
    });
  }
  function SecondSection() {
    return fields_second_section.map((fieldItem, index) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <FormStationField
            defaultValue={fields[fieldItem.name] || 0}
            name={fieldItem.name}
            label={fieldItem.label}
            key={index}
          />
        </div>
      );
    });
  }
  return (
    <form action={onSubmit} className="flex gap-2 items-end w-full">
      {wantsToViewTMs ? <FirstSection /> : <SecondSection />}
      <SubmitButton />
    </form>
  );
}
