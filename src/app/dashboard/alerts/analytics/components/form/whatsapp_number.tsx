import { Input } from "@/components/ui/input";
import { Suspense } from "react";
import WhatsAppNumberLoading from "../../loading/whatsapp_number";
export default async function WhatsAppNumberComponentsAlerts() {
  return (
    <Suspense fallback={<WhatsAppNumberLoading />}>
      <div className="w-full">
        <Input
          type="tel"
          className="w-full"
          placeholder="(88) 99999-9999"
          name="whatsapp_contact"
        />
      </div>
    </Suspense>
  );
}
