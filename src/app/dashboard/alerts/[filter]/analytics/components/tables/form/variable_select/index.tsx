import { VariablesInterfaces } from "../../../../interfaces/variables";
import VariablesMenuDropdown from "./variables_menu_dropdown";
export default function VariableSelect({
  handleAlertsVariables,
}: {
  handleAlertsVariables: () => Promise<VariablesInterfaces[]>;
}) {
  return (
    <div className="flex flex-col gap-4 w-36">
      <VariablesMenuDropdown handleAlertsVariables={handleAlertsVariables} />
    </div>
  );
}
