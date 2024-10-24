import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import { getStationsFields } from "../../fields/station";
import { FormEvent, useContext, useEffect, useState } from "react";
import { ConfigurationContext } from "../..";
import { DashboardContext } from "@/app/dashboard/analytics/context";
import Section from "./section";
export default function RowForm({
  id,
  rowValues,
  updateFunction,
}: {
  id: string;
  rowValues: any;
  updateFunction: any;
}) {
  const { updateDashboardData } = useContext(DashboardContext);
  const { wantsToViewTMs, handleData } = useContext(ConfigurationContext);
  const { first_section, second_section } = getStationsFields().getAsFields();
  const [formValues, setFormValues] = useState(() =>
    Object.fromEntries(
      [...first_section, ...second_section].map((field) => [
        field.name,
        rowValues[field.name],
      ])
    )
  );
  function handleInputChange(name: string, value: string | number) {
    setFormValues((prev: any) => ({ ...prev, [name]: Number(value) }));
  }
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await updateFunction({
      ...formValues,
      id,
    });
    await handleData();
    await updateDashboardData();
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  return (
    <form onSubmit={onSubmit} className="flex gap-2 items-end w-full">
      <Section
        section={wantsToViewTMs ? first_section : second_section}
        data={formValues}
        onInputChange={handleInputChange}
      />
      <SubmitButton />
    </form>
  );
}
