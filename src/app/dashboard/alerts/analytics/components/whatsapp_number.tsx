import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default async function WhatsAppNumberComponents() {
  return (
    <div className="w-full">
      <p className="w-full font-medium mb-6">Qual o seu WhatsApp?</p>
      <Input type="tel" className="w-full" placeholder="(88) 9 9999-9999" />
      <Button className="px-4 py-2 mt-2">Confirmar</Button>
    </div>
  );
}
