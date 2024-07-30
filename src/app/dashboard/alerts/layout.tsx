import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function AlertsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col h-screen w-full gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold text-slate-400 lg:w-2/6  w-full">
          Você deve selecionar as variáveis que deseja monitorar. As variáveis
          selecionadas são observadas 24/7 e, caso ao fim do dia elas não tenham
          alcançado o valor esperado, é enviado uma mensagem de alerta no seu
          whatapp
        </p>
        <div className="flex lg:flex-row md:flex-row  flex-col justify-start lg:items-center md:items-center items-start gap-6 py-6">
          <RadioGroup
            defaultValue="company"
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company" className="text-sm">
                Posto
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="network" id="network" />
              <Label htmlFor="network" className="text-sm">
                Rede
              </Label>
            </div>
          </RadioGroup>
          <RadioGroup
            defaultValue="fuel"
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fuel" id="fuel" />
              <Label htmlFor="fuel" className="text-sm">
                Combustível
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lubricants" id="lubricants" />
              <Label htmlFor="lubricants" className="text-sm">
                Lubrificantes
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Separator />
      </div>
      {children}
    </section>
  );
}
