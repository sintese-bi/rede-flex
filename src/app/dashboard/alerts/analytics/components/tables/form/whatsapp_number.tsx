"use client";
import { Input } from "@/components/ui/input";
import { PhoneIcon } from "lucide-react";
import InputMask from "react-input-mask";
export default function WhatsAppNumber() {
  return (
    <div className="flex items-center gap-2">
      <PhoneIcon size={18} />
      <InputMask
        mask="(99)99999-9999 (99)99999-9999 (99)99999-9999"
        onChange={() => {}}
        maskPlaceholder={"(99)99999-9999 (99)99999-9999 (99)99999-9999"}
        className="text-xs w-72"
      >
        <Input className="w-full" name="whatsapp_contact" />
      </InputMask>
    </div>
  );
}
