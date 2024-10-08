import { Button } from "@/components/ui/button";
import { UseFormReturn, useFormState } from "react-hook-form";
export default function SubmitButton({
  form,
}: {
  form: UseFormReturn<
    {
      use_mlt: number;
      use_tmc: number;
      use_tmf: number;
      use_tmp: number;
      use_tmvol: number;
      use_lucro_bruto_operacional_galonagem: number;
      use_lucro_bruto_operacional_produto: number;
    },
    any,
    undefined
  >;
}) {
  const { isSubmitting } = useFormState({ control: form.control });
  return (
    <Button
      type="submit"
      className="lg:bg-main-color md:bg-main-color bg-orange-400 text-white w-full py-6  font-extrabold"
      disabled={isSubmitting ? true : false}
    >
      {isSubmitting ? "Atualizando..." : "Atualizar"}
    </Button>
  );
}
