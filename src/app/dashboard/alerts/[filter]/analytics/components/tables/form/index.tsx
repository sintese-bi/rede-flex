"use client";
import ValueAndType from "./value_and_type";
import WhatsAppNumber from "./whatsapp_number";
import { handleAlertsUpdate } from "../../../actions";
import VariableSelect from "./variable_select";
import SubmitButton from "./submit";
import { toast } from "@/components/ui/use-toast";
export default function FormComponentsAlertsTable({
  ibm_id,
  gas_station_whats_app,
}: {
  ibm_id: string;
  gas_station_whats_app: string;
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
      <VariableSelect />
      <ValueAndType />
      <WhatsAppNumber gas_station_whats_app={gas_station_whats_app} />
      <SubmitButton />
    </form>
  );
}
