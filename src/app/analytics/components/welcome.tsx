import { Button } from "@/components/ui/button";
export default function WelcomeComponents() {
  return (
    <div className="lg:flex md:flex hidden justify-center items-center flex-col gap-4">
      <p className="text-2xl text-white font-extrabold">Bem-vindo ao login</p>
      <p className="text-sm text-white">Não tem uma conta?</p>
      <Button variant="outline" className="bg-transparent text-white">
        Cadastrar
      </Button>
    </div>
  );
}
