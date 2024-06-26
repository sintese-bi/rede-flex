"use client";
import WhatsAppNumberComponents from "./analytics/components/whatsapp_number";
import ValueAndTypeComponents from "./analytics/components/value_and_type";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import VariableSelectComponents from "./analytics/components/variable_select";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function Alerts() {
  const [marginGC, setMarginGC] = useState<Checked>(false);
  const [marginAL, setMarginAL] = useState<Checked>(false);
  const [marginTotal, setMarginTotal] = useState<Checked>(false);
  const [volumeGC, setVolumeGC] = useState<Checked>(false);
  const [volumeAL, setVolumeAL] = useState<Checked>(false);
  const [volumeTotal, setVolumeTotal] = useState<Checked>(false);
  return (
    <div className="flex flex-col w-full h-full justify-start items-start gap-8">
      <p className="text-xs font-bold text-slate-400 lg:w-2/6  w-full">
        Você deve selecionar as variáveis que deseja monitorar. As variáveis
        selecionadas são observadas 24/7 e, caso ao fim do dia elas não tenham
        alcançado o valor esperado, é enviado uma mensagem de alerta no seu
        whatapp
      </p>
      <Separator />
      <div className="flex flex-col w-full justify-between items-start gap-4">
        <div className="flex lg:flex-row flex-col w-full justify-between items-start gap-8 ">
          <VariableSelectComponents
            marginGC={marginGC}
            marginAL={marginAL}
            marginTotal={marginTotal}
            volumeGC={volumeGC}
            volumeAL={volumeAL}
            volumeTotal={volumeTotal}
            setMarginGC={setMarginGC}
            setMarginAL={setMarginAL}
            setMarginTotal={setMarginTotal}
            setVolumeGC={setVolumeGC}
            setVolumeAL={setVolumeAL}
            setVolumeTotal={setVolumeTotal}
          />
          <ValueAndTypeComponents />
          <WhatsAppNumberComponents />
        </div>
        <Button className="px-4 py-2 mt-2">Confirmar</Button>
      </div>
    </div>
  );
}
