import { DashboardContext } from "@/app/dashboard/analytics/context";
import { useContext, useEffect, useState } from "react";
import { SystemParameterizationModalContext } from "../../../context";
import { toast } from "@/components/ui/use-toast";
import Section from "../form/section";
import SubmitButton from "../form/submit_button";
import { sectionsFields } from "../../fields";
import { IStationsSectionsFields } from "../../fields/station";
import { IRegionalsSectionsFields } from "../../fields/regional";
import { Separator } from "@/components/ui/separator";
import {
  handleGeneralTMSAndBruteProfitPerRegionalUpdate,
  handleGeneralTMSAndBruteProfitPerStationUpdate,
} from "@/app/dashboard/analytics/actions";

export default function GeneralForm({}: {}) {
  const { updateDashboardData } = useContext(DashboardContext);
  const { generalData, handleData, currentSection, currentSecondarySection } =
    useContext(SystemParameterizationModalContext)!;
  const [formValues, setFormValues] = useState(generalData);
  function handleInputChange(name: string, value: string | number) {
    setFormValues((prev: any) => ({ ...prev, [name]: Number(value) }));
  }
  async function handleAction() {
    const updateFunction = {
      1: handleGeneralTMSAndBruteProfitPerStationUpdate,
      2: handleGeneralTMSAndBruteProfitPerRegionalUpdate,
    };
    const response = await updateFunction[currentSection as 1 | 2]({
      formValues,
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
    console.log(generalData);
  }, [generalData]);
  const section = sectionsFields[currentSection][currentSecondarySection] as
    | IStationsSectionsFields[]
    | IRegionalsSectionsFields[];
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full font-bold text-sm">
        <p>Formulário geral</p>
      </div>
      <form action={handleAction} className="flex gap-2 items-end w-full">
        <Section
          section={section}
          data={formValues}
          onInputChange={handleInputChange}
        />
        <SubmitButton />
      </form>
      <Separator />
    </div>
  );
}
