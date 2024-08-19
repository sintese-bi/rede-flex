import { Button } from "@/components/ui/button";
import { BoltIcon } from "lucide-react";
import { VariablesInterfaces } from "../../../interfaces/variables";
import WhatsAppNumber from "./whatsapp_number";
import ValueAndType from "./value_and_type";
import VariableSelect from "./variable_select";
export default async function FormComponentsAlertsTable({
  handleAlertsVariables,
}: {
  handleAlertsVariables: () => Promise<VariablesInterfaces[]>;
}) {
  const alertsVariables = await handleAlertsVariables();
  return (
    <form className="flex flex-row w-full items-center gap-4">
      <VariableSelect alertsVariables={alertsVariables} />
      <ValueAndType />
      <WhatsAppNumber />
      <Button size={"sm"} className="flex gap-2 text-xs">
        <BoltIcon size={18} />
        Confirmar
      </Button>
    </form>
  );
}
