import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
export default function SelectorPerStationOrRegional({
  wantsToViewRede,
  wantsToViewRegional,
  setWantsToViewRede,
  setWantsToViewRegional,
}: {
  wantsToViewRede: boolean;
  wantsToViewRegional: boolean;
  setWantsToViewRede: Dispatch<SetStateAction<boolean>>;
  setWantsToViewRegional: Dispatch<SetStateAction<boolean>>;
}) {
  function handleOnChange(value: string) {
    if (value == "rede") {
      setWantsToViewRede(true);
    } else if (value == "regional") {
      setWantsToViewRede(false);
      setWantsToViewRegional(true);
    } else {
      setWantsToViewRede(false);
      setWantsToViewRegional(false);
    }
  }
  return (
    <Select
      value={
        wantsToViewRede ? "rede" : wantsToViewRegional ? "regional" : "station"
      }
      onValueChange={handleOnChange}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Configurar por rede, regional, ou posto" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rede">Geral</SelectItem>
        <SelectItem value="regional">Regional</SelectItem>
        <SelectItem value="station">Postos</SelectItem>
      </SelectContent>
    </Select>
  );
}
