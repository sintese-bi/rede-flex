import { Separator } from "@/components/ui/separator";
import { VariablesInterfaces } from "../../interfaces/variables";
import SelectedVariablesAlerts from "./selected_variables";
import SubmitButtonAlerts from "./submit_button";
import ValueAndTypeComponentsAlerts from "./value_and_type";
import VariableSelectFormComponentsAlerts from "./variable_select";
import WhatsAppNumberComponentsAlerts from "./whatsapp_number";

export default async function FormComponentsAlerts({
  handleAlertsVariables,
  handleAlertsVariablesSelect,
}: {
  handleAlertsVariables: () => Promise<VariablesInterfaces[]>;
  handleAlertsVariablesSelect: (form: FormData) => Promise<void>;
}) {
  const alertsVariables = await handleAlertsVariables();
  return (
    <form
      action={handleAlertsVariablesSelect}
      className="flex flex-col lg:w-1/4 w-full items-start gap-8 "
    >
      <div className="flex flex-col w-full gap-2">
        <p className="text-xs font-bold uppercase">Formulário de variáveis</p>
        <Separator />
      </div>
      <VariableSelectFormComponentsAlerts alertsVariables={alertsVariables} />
      <ValueAndTypeComponentsAlerts />
      <WhatsAppNumberComponentsAlerts />
      <SubmitButtonAlerts />
      <SelectedVariablesAlerts alertsVariables={alertsVariables} />
    </form>
  );
}
