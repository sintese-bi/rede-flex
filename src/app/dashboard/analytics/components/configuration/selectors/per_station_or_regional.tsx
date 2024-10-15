import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
export default function SelectorPerStationOrRegional({
  wantsToViewRegional,
  setWantsToViewRegional,
}: {
  wantsToViewRegional: boolean;
  setWantsToViewRegional: Dispatch<SetStateAction<boolean>>;
}) {
  function handleOnChange(value: string) {
    setWantsToViewRegional(value == "regional" ? true : false);
  }
  return (
    <Select
      value={wantsToViewRegional ? "regional" : "station"}
      onValueChange={handleOnChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Configurar por regional ou por posto" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="regional">Geral</SelectItem>
        <SelectItem value="station">Postos</SelectItem>
      </SelectContent>
    </Select>
  );
}
