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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { handleTMsAndBruteProfit } from "../../../actions";
const formSchema = z.object({
  use_mlt: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
  use_tmc: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
  use_tmf: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
  use_tmp: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
  use_tmvol: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
  use_lucro_bruto_operacional: z
    .number({ message: "Por favor, preencha o campo corretamente" })
    .min(0)
    .max(100),
});
const fields_first_section: {
  name: "use_mlt" | "use_tmc" | "use_tmf" | "use_tmp" | "use_tmvol";
  label: string;
}[] = [
  {
    name: "use_mlt",
    label: "MLT",
  },
  {
    name: "use_tmc",
    label: "TMC",
  },
  {
    name: "use_tmf",
    label: "TMF",
  },
  {
    name: "use_tmp",
    label: "TMP",
  },
  {
    name: "use_tmvol",
    label: "TMVOL",
  },
];
const fields_second_section: {
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
    name: "use_lucro_bruto_operacional",
    label: "Lucro Bruto Operacional (%)",
  },
];
export default function FormConfiguration() {
  const [section, setSection] = useState<"first" | "second">("first");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      use_mlt: 0,
      use_tmc: 0,
      use_tmf: 0,
      use_tmp: 0,
      use_tmvol: 0,
      use_lucro_bruto_operacional: 0,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await handleTMsAndBruteProfit(values);
  }
  function handleSectionChange() {
    setSection(section == "first" ? "second" : "first");
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
              <Input placeholder="0" {...field} />
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
        <div className="flex justify-center w-full gap-4 my-4">
          <Button
            className={
              section == "first"
                ? `border-0 border-b-[1px] border-main-color rounded-none`
                : ""
            }
            variant="ghost"
            type="button"
            onClick={handleSectionChange}
          >
            Lista de TMs
          </Button>
          <Button
            className={
              section == "second"
                ? `border-0 border-b-[1px] border-main-color rounded-none`
                : ""
            }
            variant="ghost"
            type="button"
            onClick={handleSectionChange}
          >
            Desconto por combustível
          </Button>
        </div>
        {section == "first" ? <FirstSection /> : <SecondSection />}
        <Button type="submit">Confirmar</Button>
      </form>
    </Form>
  );
}
