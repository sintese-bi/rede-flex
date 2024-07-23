import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldsFormComponents from "./fields";
import SubmitButtonFormComponents from "./submit_button";
import OptionsFormComponents from "./options";
import { handleLogin } from "../../actions";
import { toast } from "@/components/ui/use-toast";
const formSchema = z.object({
  use_email: z
    .string()
    .email({ message: "Por favor, insira um email válido" })
    .min(4, {
      message: "Seu email precisa ter pelo menos 12 caracteres.",
    })
    .max(30, {
      message: "Seu email precisa ter no máximo 30 caracteres.",
    }),
  use_password: z
    .string()
    .min(4, {
      message: "Sua senha precisa ter pelo menos 4 caracteres.",
    })
    .max(20, {
      message: "Sua senha precisa ter no máximo 10 caracteres.",
    }),
});
export default function FormComponents() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      use_email: "",
      use_password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { succeed, message } = await handleLogin(values);
    toast({
      duration: 1000,
      variant: succeed ? "default" : "destructive",
      title: "Login",
      description: message,
    });
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
