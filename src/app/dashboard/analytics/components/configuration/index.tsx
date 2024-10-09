import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BoltIcon } from "lucide-react";
import FormConfiguration from "./form";
import { Separator } from "@/components/ui/separator";
import { handleTMsAndBruteProfit } from "../../actions";
export default async function Configuration() {
  const { data } = await handleTMsAndBruteProfit();
  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <BoltIcon size={18} />
          <p>Configurar TMs e Lucro bruto</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="z-50 ">
        <DialogHeader>
          <DialogTitle>Setup do Sistema</DialogTitle>
          <DialogDescription>
            Este formulario preenche os parametros da operação:
          </DialogDescription>
          <Separator />
          <FormConfiguration data={data} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
