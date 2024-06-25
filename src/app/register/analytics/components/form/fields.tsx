import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
export default function FieldsFormComponents({
  form,
}: {
  form: UseFormReturn<
    {
      username: string;
      password: string;
      email: string;
    },
    any,
    undefined
  >;
}) {
  const formFields: {
    name: "username" | "password" | "email";
    label: string;
    placeholder: string;
  }[] = [
    {
      name: "email",
      label: "Email",
      placeholder: "example@gmail.com",
    },
    { name: "username", label: "Username", placeholder: "redeflex" },
    { name: "password", label: "Password", placeholder: "********" },
  ];
  return (
    <>
      {formFields.map((formField, index) => (
        <FormField
          key={index}
          control={form.control}
          name={formField.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="lg:text-black md:text-black text-white">
                {formField.label}
              </FormLabel>
              <FormControl>
                <Input placeholder={formField.placeholder} {...field} />
              </FormControl>
              <FormMessage className="lg:text-sm md:text-sm text-xs" />
            </FormItem>
          )}
        />
      ))}
    </>
  );
}
