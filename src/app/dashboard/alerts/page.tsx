import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Suspense } from "react";
import WhatsAppNumberComponents from "./analytics/components/whatsapp_number";
import ValueAndTypeComponents from "./analytics/components/value_and_type";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import VariableSelectComponents from "./analytics/components/variable_select";
export default async function Alerts() {
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
          <ValueAndTypeComponents />
          <WhatsAppNumberComponents />
          <VariableSelectComponents />
        </div>
        <Button className="px-4 py-2 mt-2">Confirmar</Button>
      </div>
    </div>
  );
}
