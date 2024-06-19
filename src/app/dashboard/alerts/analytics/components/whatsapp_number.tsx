import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default async function WhatsAppNumberComponents() {
  return (
    <div className="lg:w-1/3 w-full">
      <p className="w-full text-sm mb-4 font-bold">Qual o seu WhatsApp?</p>
      <Input type="tel" className="w-full" placeholder="(88) 9 9999-9999" />
    </div>
  );
}
