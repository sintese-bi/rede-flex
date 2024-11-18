import { toast } from "@/components/ui/use-toast";
import SubmitButton from "./submit_button";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "@/app/dashboard/analytics/context";
import Section from "./section";
import { IRegionalsSectionsFields } from "../../fields/regional";
import { SystemParameterizationModalContext } from "../../../context";
import { sectionsFields } from "../../fields";
import { IStationsSectionsFields } from "../../fields/station";
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
  const { data, handleData, currentSection, currentSecondarySection } =
    useContext(SystemParameterizationModalContext)!;
  const [formValues, setFormValues] = useState(() =>
    Object.fromEntries(
      [
        ...sectionsFields[currentSection as 1 | 2][0],
        ...sectionsFields[currentSection as 1 | 2][1],
      ]
        .filter((field) => field["isInputField"] == true)
        .map((field) => [field.accessorKey, rowValues[field.accessorKey]])
    )
  );
  function handleInputChange(name: string, value: string | number) {
    setFormValues((prev: any) => ({ ...prev, [name]: Number(value) }));
  }
  async function handleAction() {
    const response = await updateFunction({
      ...formValues,
      id,
    });
    await updateDashboardData();
    toast({
      duration: 1000,
      variant: "default",
      title: "TMs e Lucro Bruto",
      description: response.message,
    });
  }
  useEffect(() => {
    setFormValues(() =>
      Object.fromEntries(
        [
          ...sectionsFields[currentSection as 1 | 2][0],
          ...sectionsFields[currentSection as 1 | 2][1],
        ]
          .filter((field) => field["isInputField"] == true)
          .map((field) => [field.accessorKey, rowValues[field.accessorKey]])
      )
    );
  }, [rowValues]);
  const section = sectionsFields[currentSection][currentSecondarySection] as
    | IStationsSectionsFields[]
    | IRegionalsSectionsFields[];
  return (
    <form action={handleAction} className="flex gap-2 items-end w-full">
      <Section
        section={section}
        data={formValues}
        onInputChange={handleInputChange}
      />
      <SubmitButton />
    </form>
  );
}
