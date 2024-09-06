import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VariablesInterfaces } from "../../../../interfaces/variables";
import { useEffect, useState } from "react";
import { handleAlertsVariables } from "../../../../actions";
export default function VariablesMenuDropdown() {
  const [alertsVariables, setAlertsVariables] = useState<VariablesInterfaces[]>(
    []
  );
  const selectedVariables = alertsVariables.filter(
    ({ value }) => value !== false
  );
  useEffect(() => {
    const fetch = async () => {
      const response = await handleAlertsVariables();
      setAlertsVariables(response);
    };
    fetch();
  }, []);
  function handleVariablesAlreadySelected(variable: string) {
    const variableIsSelected = selectedVariables.find(
      ({ label }) => label == variable
    );
    if (!variableIsSelected) return false;
    return true;
  }
  return (
    <Select name="variable">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Variáveis" />
      </SelectTrigger>
      <SelectContent>
        {alertsVariables.map(({ label }, index) => (
          <SelectItem
            key={index}
            value={label}
            disabled={handleVariablesAlreadySelected(label)}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
