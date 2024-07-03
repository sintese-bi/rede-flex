import { Separator } from "@/components/ui/separator";
import FormComponents from "./analytics/components/form";
import {
  handleAlertsVariables,
  handleAlertsVariablesSelect,
} from "./analytics/actions";
export default async function Alerts() {
  return (
    <div className="flex flex-col w-full h-full justify-start items-start gap-8">
      {/**
       * <p className="text-xs font-bold text-slate-400 lg:w-2/6  w-full">
        Você deve selecionar as variáveis que deseja monitorar. As variáveis
        selecionadas são observadas 24/7 e, caso ao fim do dia elas não tenham
        alcançado o valor esperado, é enviado uma mensagem de alerta no seu
        whatapp
      </p>
      <Separator />
      <div className="flex flex-col w-full justify-between items-start gap-4">
        <FormComponents
          handleAlertsVariables={handleAlertsVariables}
          handleAlertsVariablesSelect={handleAlertsVariablesSelect}
        />
      </div>
       */}
    </div>
  );
}
