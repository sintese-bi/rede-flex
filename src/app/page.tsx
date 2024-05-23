"use client"
import {z} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
const formSchema = z.object({
  username: z.string().min(4, {
    message: "Seu username precisa ter pelo menos 4 letras."
  }).max(30, {
    message: "Seu username precisa ter no máximo 30 letras."
  }),
  password: z.string().min(4, {
    message: "Sua senha precisa ter pelo menos 4 letras."
  }).max(20, {
    message: "Sua senha precisa ter no máximo 10 letras."
  })
})
export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  })
  function onSubmit(values: z.infer<typeof formSchema>){
    const {username, password} = values
    toast({
      title: "Login",
      description: username == "redeflex" && password == "redeflex1234" ? "Login efetuado com sucesso" : "Login falhou, por favor verifique os dados"
    })
  }
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/logo.jpeg" alt="" className="w-52"/>
      <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-1/5 md:w-2/5 sm:w-10/12 w-10/12 space-y-8">
         <FormField control={form.control} name="username" render={({field}) => (
           <FormItem>
             <FormLabel>Username</FormLabel>
             <FormControl>
               <Input placeholder="redeflex" {...field}/>
             </FormControl>
             <FormDescription>
               Insira seu username.
             </FormDescription>
             <FormMessage />
           </FormItem>
           )}
         />
         <FormField control={form.control} name="password" render={({field}) => (
           <FormItem>
             <FormLabel>Senha</FormLabel>
             <FormControl>
               <Input  {...field} type="password"/>
             </FormControl>
             <FormDescription>
               Insira sua senha de acesso.
             </FormDescription>
             <FormMessage />
           </FormItem>
           )}
         />
         <Button type="submit">Login</Button>
       </form>
      </Form>
    </main>
  );
}
