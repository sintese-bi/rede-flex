import { Separator } from "@/components/ui/separator";
import FormComponents from "./analytics/components/form";
import {
  handleAlertsVariables,
  handleAlertsVariablesSelect,
} from "./analytics/actions";
import LogsComponents from "./analytics/components/logs";
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
      <div className="flex lg:flex-row flex-col w-full lg:gap-4 gap-12">
        <FormComponents
          handleAlertsVariables={handleAlertsVariables}
          handleAlertsVariablesSelect={handleAlertsVariablesSelect}
        />
        <LogsComponents />
      </div>
    </div>
  );
}
