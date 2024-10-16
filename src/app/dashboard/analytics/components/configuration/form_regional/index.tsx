"use client";
import { Input } from "@/components/ui/input";
import { handleTMsAndBruteProfitUpdate } from "../../../actions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import { Label } from "@/components/ui/label";
const fields_first_section: {
  name:
    | "use_mlt"
    | "use_tmc"
    | "use_tmf"
    | "use_tmp"
    | "use_tmvol"
    | "use_lucro_bruto_operacional"
    | "lucro_bruto_operacional_produto"
    | "lucro_bruto_operacional_galonagem";
  label: string;
}[] = [
  {
    name: "use_mlt",
    label: "MLT (R$/L)",
  },
  {
    name: "use_tmc",
    label: "TMC (R$)",
  },
  {
    name: "use_tmf",
    label: "TMF (R$)",
  },
  {
    name: "use_tmp",
    label: "TMP (R$)",
  },
  {
    name: "use_tmvol",
    label: "TMVOL (L)",
  },
  {
    name: "use_lucro_bruto_operacional",
    label: "Lucro bruto operacional",
  },
  {
    name: "lucro_bruto_operacional_galonagem",
    label: "Lucro bruto operacional galonagem",
  },
  {
    name: "lucro_bruto_operacional_produto",
    label: "Lucro bruto operacional produto",
  },
];
const fields_second_section: {
  name:
    | "use_gasolina_comum_comb"
    | "use_etanol_comum_comb"
    | "use_oleo_diesel_b_s10_comum_comb"
    | "use_oleo_diesel_b_s500_comum_comb";
  label: string;
}[] = [
  {
    name: "use_gasolina_comum_comb",
    label: "Gasolina comum",
  },
  {
    name: "use_etanol_comum_comb",
    label: "Etanol comum",
  },
  {
    name: "use_oleo_diesel_b_s10_comum_comb",
    label: "Diesel S10 comum",
  },
  {
    name: "use_oleo_diesel_b_s500_comum_comb",
    label: "Diesel S500 comum",
  },
];
export default function FormRegionalConfiguration({
  data,
  wantsToViewTMs,
}: {
  data: any;
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
    const response = await handleTMsAndBruteProfitUpdate(values);
    toast({
      duration: 2000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  function FirstSection() {
    return fields_first_section.map((fieldItem, index) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <Label htmlFor={fieldItem.name}>{fieldItem.label}</Label>
          <Input
            name={fieldItem.name}
            defaultValue={data[fieldItem.name] || 0}
            className="col-span-3"
            type="number"
            min="0"
            step="0.01"
          />
        </div>
      );
    });
  }
  function SecondSection() {
    return fields_second_section.map((fieldItem, index) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <Label htmlFor={fieldItem.name}>{fieldItem.label}</Label>
          <Input
            name={fieldItem.name}
            defaultValue={data[fieldItem.name] || 0}
            className="col-span-3"
            type="number"
            min="0"
            step="0.01"
          />
        </div>
      );
    });
  }
  return (
    <form action={onSubmit} className="grid gap-4 py-4 space-y-4 px-2">
      {wantsToViewTMs ? <FirstSection /> : <SecondSection />}
      <SubmitButton />
    </form>
  );
}
