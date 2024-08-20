import { VariablesInterfaces } from "../../../../interfaces/variables";
import VariablesMenuDropdown from "./variables_menu_dropdown";
export default function VariableSelect({
  alertsVariables,
}: {
  alertsVariables: VariablesInterfaces[];
}) {
  return (
    <div className="flex flex-col gap-4 w-36">
      <VariablesMenuDropdown alertsVariables={alertsVariables} />
    </div>
  );
}
