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
      use_email: string;
      use_password: string;
    },
    any,
    undefined
  >;
}) {
  const formFields: {
    name: "use_email" | "use_password";
    label: string;
    placeholder: string;
  }[] = [
    { name: "use_email", label: "Email", placeholder: "example@gmail.com" },
    { name: "use_password", label: "Senha", placeholder: "********" },
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
