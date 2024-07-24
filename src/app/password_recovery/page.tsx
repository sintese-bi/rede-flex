import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { LockIcon } from "lucide-react";
import Image from "next/image";

export default async function PasswordRecovery() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="redeflex_logo"
          width={120}
          height={120}
          priority={true}
          className="w-auto h-auto"
        />
      </div>
      <form
        method="POST"
        className="flex flex-col gap-4 lg:w-1/4 md:w-2/4 sm:w-2/4 w-4/5 px-6 py-6 rounded-md shadow-lg"
      >
        <div>
          <p className="text-xs font-bold opacity-30">
            Por favor, digite sua nova senha no campo abaixo, você pode mudar
            sua senha sempre que desejar.
          </p>
        </div>
        <Separator />
        <div className="flex flex-col gap-3">
          <Label htmlFor="new_password" className="flex gap-2 items-center">
            <LockIcon size={24} /> Nova senha
          </Label>
          <Input name="new_password" type="password" id="new_password" />
        </div>
        <Button type="submit">Confirmar</Button>
      </form>
    </div>
  );
}
