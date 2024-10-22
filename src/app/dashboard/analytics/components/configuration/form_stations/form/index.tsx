import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import FormStationField from "./field";
import { getStationsFields } from "../../fields/station";
import { useContext } from "react";
import { ConfigurationContext } from "../..";
export default function FormStation({
  id,
  rowValues,
  updateFunction,
}: {
  id: string;
  rowValues: any;
  updateFunction: any;
}) {
  const { wantsToViewTMs, handleData } = useContext(ConfigurationContext);
  const { first_section, second_section } = getStationsFields().getAsFields();
  async function onSubmit(form: FormData) {
    const total_fields = first_section.concat(second_section);
    const values: Record<any, number> = {};
    total_fields.forEach(
      (field: any) =>
        (values[field] = Number(form.get(field)) || rowValues[field])
    );
    const response = await updateFunction({
      ...values,
      id,
    });
    await handleData();
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  function FirstSection() {
    return first_section.map((fieldItem: any, index: number) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <FormStationField
            defaultValue={rowValues[fieldItem] || 0}
            name={fieldItem}
            label={
              getStationsFields().getHeader(
                fieldItem,
                "first_section"
              ) as string
            }
            key={index}
          />
        </div>
      );
    });
  }
  function SecondSection() {
    return second_section.map((fieldItem: any, index: number) => {
      return (
        <div key={index} className="flex flex-col gap-4">
          <FormStationField
            defaultValue={rowValues[fieldItem] || 0}
            name={fieldItem}
            label={
              getStationsFields().getHeader(
                fieldItem,
                "second_section"
              ) as string
            }
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
