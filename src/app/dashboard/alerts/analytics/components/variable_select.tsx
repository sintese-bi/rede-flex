"use client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Checked = DropdownMenuCheckboxItemProps["checked"];
import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import VariableSelectLoading from "../loading/variable_select";
export default function VariableSelectComponents() {
  const [marginGC, setMarginGC] = useState<Checked>(false);
  const [marginAL, setMarginAL] = useState<Checked>(false);
  const [marginTotal, setMarginTotal] = useState<Checked>(false);
  const [volumeGC, setVolumeGC] = useState<Checked>(false);
  const [volumeAL, setVolumeAL] = useState<Checked>(false);
  const [volumeTotal, setVolumeTotal] = useState<Checked>(false);
  return (
    <Suspense fallback={<VariableSelectLoading />}>
      <div>
        <p className="w-full text-sm mb-6 font-bold">
          Escolha as variáveis a serem monitoradas
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Variáveis</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Variáveis</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={marginGC}
              onCheckedChange={setMarginGC}
            >
              Margem GC
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={marginAL}
              onCheckedChange={setMarginAL}
            >
              Margem AL
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={marginTotal}
              onCheckedChange={setMarginTotal}
            >
              Margem Total
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={volumeGC}
              onCheckedChange={setVolumeGC}
            >
              Volume GC
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={volumeAL}
              onCheckedChange={setVolumeAL}
            >
              Volume AL
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={volumeTotal}
              onCheckedChange={setVolumeTotal}
            >
              Volume Total
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Suspense>
  );
}
