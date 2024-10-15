"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  handleTMsAndBruteProfit,
  handleTMsAndBruteProfitUpdate,
} from "../../../actions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
const formSchema = z.object({
  use_mlt: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_tmc: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_tmf: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_tmp: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_tmvol: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_lucro_bruto_operacional: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_gasolina_comum: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_etanol: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_diesel_S500: z.coerce
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0, "O valor mínimo é 0")
    .max(100, "O valor máximo é 100"),
  use_diesel_S10: z.coerce
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
export default function FormRegionalConfiguration({
  data,
  wantsToViewTMs,
}: {
  data: any;
  wantsToViewTMs: boolean;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      use_mlt: data["use_mlt"],
      use_tmc: data["use_tmc"],
      use_tmf: data["use_tmf"],
      use_tmp: data["use_tmp"],
      use_tmvol: data["use_tmvol"],
      use_lucro_bruto_operacional: data["use_lucro_bruto_operacional"],
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await handleTMsAndBruteProfitUpdate(values);
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }

  function FirstSection() {
    return fields_first_section.map((fieldItem, index) => (
      <FormField
        key={index}
        control={form.control}
        name={fieldItem.name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fieldItem.label}</FormLabel>
            <FormControl>
              <Input placeholder="0" {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    ));
  }
  function SecondSection() {
    return fields_second_section.map((fieldItem, index) => (
      <FormField
        key={index}
        control={form.control}
        name={fieldItem.name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fieldItem.label}</FormLabel>
            <FormControl>
              <Input placeholder="0" {...field} type="number" />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    ));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {wantsToViewTMs ? <FirstSection /> : <SecondSection />}
        <SubmitButton form={form} />
      </form>
    </Form>
  );
}
