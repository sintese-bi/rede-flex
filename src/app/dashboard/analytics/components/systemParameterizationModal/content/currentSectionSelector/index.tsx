import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";
export default function CurrentSectionSelector({
  currentSection,
  setCurrentSection,
}: {
  currentSection: 0 | 1 | 2;
  setCurrentSection: Dispatch<SetStateAction<0 | 1 | 2>>;
}) {
  function handleOnChange(value: string) {
    setCurrentSection(Number(value) as 0 | 1 | 2);
  }
  return (
    <Select value={String(currentSection)} onValueChange={handleOnChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Configurar por rede, regional, ou posto" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">Rede</SelectItem>
        <SelectItem value="1">Postos</SelectItem>
        <SelectItem value="2">Regional</SelectItem>
      </SelectContent>
    </Select>
  );
}
