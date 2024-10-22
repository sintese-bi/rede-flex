"use client";
import { Input } from "@/components/ui/input";
import { handleTMsAndBruteProfitUpdate } from "../../../actions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import { Label } from "@/components/ui/label";
import { useContext } from "react";
import { ConfigurationContext } from "..";
import { DashboardContext } from "../../../context";
export default function FormRegionalConfiguration({
  data,
  fields,
}: {
  data: any;
  fields: any;
}) {
  const { updateDashboardData } = useContext(DashboardContext);
  const { wantsToViewTMs, handleData } = useContext(ConfigurationContext);
  async function onSubmit(form: FormData) {
    const first_section_fields: any = fields["first_section"].map(
      (fieldItem: any) => fieldItem.name
    );
    const second_section_fields: any = fields["second_section"].map(
      (fieldItem: any) => fieldItem.name
    );
    const total_fields = first_section_fields.concat(second_section_fields);
    const values: Record<any, number> = {};
    total_fields.forEach(
      (field: any) => (values[field] = Number(form.get(field)) || data[field])
    );
    const response = await handleTMsAndBruteProfitUpdate(values);
    await handleData();
    await updateDashboardData();
    toast({
      duration: 2000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  function FirstSection() {
    return fields["first_section"].map((fieldItem: any, index: number) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <Label htmlFor={fieldItem.name}>{fieldItem.label}</Label>
          <Input
            name={fieldItem.name}
            defaultValue={data[fieldItem.name] || 0}
            className="col-span-3"
            type="number"
            min="0"
            step="0.0001"
          />
        </div>
      );
    });
  }
  function SecondSection() {
    return fields["second_section"].map((fieldItem: any, index: number) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <Label htmlFor={fieldItem.name}>{fieldItem.label}</Label>
          <Input
            name={fieldItem.name}
            defaultValue={data[fieldItem.name] || 0}
            className="col-span-3"
            type="number"
            min="0"
            step="0.0001"
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
