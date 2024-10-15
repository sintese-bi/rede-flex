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
import { Label } from "@/components/ui/label";
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
      duration: 5000,
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
