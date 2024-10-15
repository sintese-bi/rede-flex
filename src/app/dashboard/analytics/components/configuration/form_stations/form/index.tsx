import { handleTMsAndBruteProfitPerStationUpdate } from "@/app/dashboard/analytics/actions";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "./submit_button";
import FormStationField from "./field";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
  tmp: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  tmf: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  tmc: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  tmvol: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  tm_lucro_bruto_operacional: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
});
const fields_first_section: {
  name:
    | "use_mlt"
    | "use_tmc"
    | "use_tmf"
    | "use_tmp"
    | "use_tmvol"
    | "use_lucro_bruto_operacional";
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
];
const fields_second_section: {
  name:
    | "use_gasolina_comum"
    | "use_etanol"
    | "use_diesel_S500"
    | "use_diesel_S10";
  label: string;
}[] = [
  {
    name: "use_gasolina_comum",
    label: "Gasolina comum, adtivada, power",
  },
  {
    name: "use_etanol",
    label: "Etanol hidratado",
  },
  {
    name: "use_diesel_S500",
    label: "Diesel S500",
  },
  {
    name: "use_diesel_S10",
    label: "Diesel S10",
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
  const fieldItems = Object.keys(fields);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tmp: fields["tmp"],
      tmf: fields["tmf"],
      tmc: fields["tmc"],
      tmvol: fields["tmvol"],
      tm_lucro_bruto_operacional: fields["tm_lucro_bruto_operacional"],
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await handleTMsAndBruteProfitPerStationUpdate(values, id);
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  function FirstSection() {
    return fields_first_section.map((fieldItem, index) => (
      <FormStationField
        form={form}
        name={fieldItem.name}
        label={fieldItem.label}
        key={index}
      />
    ));
  }
  function SecondSection() {
    return fields_second_section.map((fieldItem, index) => (
      <FormStationField
        form={form}
        name={fieldItem.name}
        label={fieldItem.label}
        key={index}
      />
    ));
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 items-end min-w-[620px]"
      >
        {wantsToViewTMs ? <FirstSection /> : <SecondSection />}
        <SubmitButton />
      </form>
    </Form>
  );
}
