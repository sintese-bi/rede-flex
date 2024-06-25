import { Button } from "@/components/ui/button";
export default function WelcomeComponents() {
  return (
    <div className="lg:flex md:flex hidden justify-center items-center flex-col gap-4">
      <p className="text-2xl text-white font-extrabold">
        Bem-vindo ao cadastro
      </p>
      <p className="text-sm text-white">Já tem uma contra registrada?</p>
      <Button variant="outline" className="bg-transparent text-white">
        Login
      </Button>
    </div>
  );
}
