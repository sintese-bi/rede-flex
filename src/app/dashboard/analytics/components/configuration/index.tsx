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
export default async function Configuration() {
  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <BoltIcon size={18} />
          <p>Configurar TMs e Lucro bruto</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="z-50">
        <DialogHeader>
          <DialogTitle>Configuração de TMs e Lucro bruto</DialogTitle>
          <DialogDescription>
            Esse formulário vai preencher manualmente os dados de{" "}
            <strong>TMs</strong>, e também o <strong>Lucro Bruto</strong>.
          </DialogDescription>
          <Separator />
          <FormConfiguration />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
