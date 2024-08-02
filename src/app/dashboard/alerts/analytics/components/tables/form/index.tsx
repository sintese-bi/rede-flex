import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BoltIcon, PhoneIcon } from "lucide-react";
export default async function FormComponentsAlertsTable() {
  return (
    <form className="flex flex-row w-full items-center gap-4">
      <Input
        type="number"
        name="margin_min_value"
        defaultValue={0}
        className="w-24"
      />
      <Select name="margin_min_value_type">
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Tipo do valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="absolute">Absoluto</SelectItem>
          <SelectItem value="percentage">Percentual</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center gap-2">
        <PhoneIcon size={18} />
        <Input
          type="tel"
          placeholder="(88) 99999-9999"
          className="w-52"
          name="whatsapp_contact"
        />
      </div>
      <Button size={"sm"} className="flex gap-2 text-xs">
        <BoltIcon size={18} />
        Confirmar
      </Button>
    </form>
  );
}
