import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Seu username precisa ter pelo menos 4 letras.",
    })
    .max(30, {
      message: "Seu username precisa ter no máximo 30 letras.",
    }),
  password: z
    .string()
    .min(4, {
      message: "Sua senha precisa ter pelo menos 4 letras.",
    })
    .max(20, {
      message: "Sua senha precisa ter no máximo 10 letras.",
    }),
});
export default function LoginComponents() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password } = values;
    const validLoginInfo = username == "redeflex" && password == "redeflex1234";
    toast({
      duration: 1000,
      variant: validLoginInfo ? "default" : "destructive",
      title: "Login",
      description: validLoginInfo
        ? "Login efetuado com sucesso"
        : "Login falhou, por favor verifique os dados",
    });
    validLoginInfo ? router.push("/dashboard") : null;
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-5/6 space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-black md:text-black text-white">
                Username
              </FormLabel>
              <FormControl>
                <Input placeholder="redeflex" {...field} />
              </FormControl>
              <FormMessage className="lg:text-sm md:text-sm text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-black md:text-black text-white">
                Senha
              </FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="********" />
              </FormControl>
              <FormMessage className="lg:text-sm md:text-sm text-xs" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="lg:bg-main-color md:bg-main-color bg-orange-400 text-white w-full py-6 rounded-xl font-extrabold"
        >
          Login
        </Button>
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2 lg:text-slate-500 md:text-slate-500 text-slate-200">
            <Checkbox
              id="remember_me"
              className="lg:border-main-color md:border-main-color border-white"
            />
            <label
              htmlFor="remember_me"
              className="lg:text-sm md:text-sm text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Lembrar de mim
            </label>
          </div>
          <p className="lg:text-sm md:text-sm text-xs font-medium lg:text-slate-500 md:text-slate-500 text-slate-200 underline">
            Esqueceu a senha?
          </p>
        </div>
      </form>
    </Form>
  );
}
