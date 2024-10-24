"use client";
import { handleTMsAndBruteProfitUpdate } from "../../../actions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import { FormEvent, useContext, useState } from "react";
import { ConfigurationContext } from "..";
import { DashboardContext } from "../../../context";
import Section from "./section";
export default function FormRede({ data, fields }: { data: any; fields: any }) {
  const { updateDashboardData } = useContext(DashboardContext);
  const { wantsToViewTMs, handleData } = useContext(ConfigurationContext);
  const [formValues, setFormValues] = useState(() =>
    Object.fromEntries(
      [...fields.first_section, ...fields.second_section].map((field) => [
        field.name,
        data[field.name] || 0,
      ])
    )
  );
  function handleInputChange(name: string, value: string | number) {
    setFormValues((prev: any) => ({ ...prev, [name]: Number(value) }));
  }
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await handleTMsAndBruteProfitUpdate(formValues);
    await handleData();
    await updateDashboardData();
    toast({
      duration: 2000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 py-4 space-y-4 px-2">
      <Section
        section={wantsToViewTMs ? fields.first_section : fields.second_section}
        data={formValues}
        onInputChange={handleInputChange}
      />
      <SubmitButton />
    </form>
  );
}
