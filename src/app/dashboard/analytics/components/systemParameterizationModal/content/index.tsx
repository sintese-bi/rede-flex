import { ContextProps, SystemParameterizationModalContext } from "../context";
import FormRede from "./form_rede";
import FormsTableConfiguration from "./forms_table";
import CurrentSecondarySectionSelector from "./currentSecondarySectionSelector";
import CurrentSectionSelector from "./currentSectionSelector";
import { sectionsFields } from "./fields";
import CircularLoading from "@/components/loading/circularLoading";
import { useContext } from "react";
import GeneralForm from "./forms_table/generalForm";
export default function SystemParameterizationModalContent() {
  const {
    data,
    generalData,
    currentSection,
    currentSecondarySection,
    handleData,
    setCurrentSection,
    setCurrentSecondarySection,
  } = useContext(SystemParameterizationModalContext)!;
  if (!data) return <CircularLoading />;
  return (
    <>
      <div>
        <CurrentSectionSelector
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <CurrentSecondarySectionSelector
          currentSection={currentSection}
          currentSecondarySection={currentSecondarySection}
          setCurrentSecondarySection={setCurrentSecondarySection}
        />
      </div>
      <GeneralForm />
      <div className="w-auto max-h-[400px]  z-100">
        {currentSection == 0 ? (
          <FormRede
            data={data}
            fields={sectionsFields[currentSection]}
            currentSection={currentSection}
            currentSecondarySection={currentSecondarySection}
          />
        ) : (
          <FormsTableConfiguration
            data={data}
            fields={sectionsFields[currentSection]}
          />
        )}
      </div>
    </>
  );
}
