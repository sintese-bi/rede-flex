import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import FieldsFormComponents from "./fields";
import SubmitButtonFormComponents from "./submit_button";
import OptionsFormComponents from "./options";
const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Seu username precisa ter pelo menos 4 caracteres.",
    })
    .max(30, {
      message: "Seu username precisa ter no máximo 30 caracteres.",
    }),
  password: z
    .string()
    .min(4, {
      message: "Sua senha precisa ter pelo menos 4 caracteres.",
    })
    .max(20, {
      message: "Sua senha precisa ter no máximo 10 caracteres.",
    }),
  email: z
    .string()
    .email({ message: "Digite um email válido" })
    .max(36, { message: "Seu email deveria ter no máximo 36 caracteres" }),
});
export default function FormComponents() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    const { username, password, email } = values;
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
        <FieldsFormComponents form={form} />
        <SubmitButtonFormComponents />
        <OptionsFormComponents />
      </form>
    </Form>
  );
}
