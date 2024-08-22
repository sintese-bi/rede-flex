"use client";
import { Button } from "@/components/ui/button";
import { BoltIcon } from "lucide-react";
import ValueAndType from "./value_and_type";
import WhatsAppNumber from "./whatsapp_number";
import { handleAlertsUpdate, handleAlertsVariables } from "../../../actions";
import VariableSelect from "./variable_select";
import SubmitButton from "./submit";
import { toast } from "@/components/ui/use-toast";
export default function FormComponentsAlertsTable({
  ibm_id,
}: {
  ibm_id: string;
}) {
  async function handleFormSubmit(form: FormData) {
    const { message } = await handleAlertsUpdate(form, ibm_id);
    toast({
      variant: "default",
      duration: 1500,
      title: "Alerta configurado",
      description: message,
    });
  }
  return (
    <form
      className="flex flex-row w-full items-center gap-4"
      action={handleFormSubmit}
    >
      <VariableSelect handleAlertsVariables={handleAlertsVariables} />
      <ValueAndType />
      <WhatsAppNumber />
      <SubmitButton />
    </form>
  );
}
