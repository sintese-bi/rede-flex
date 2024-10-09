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
      use_lucro_bruto_operacional: number;
      use_gasolina_comum: number;
      use_etanol: number;
      use_diesel_S500: number;
      use_diesel_S10: number;
    },
    any,
    undefined
  >;
}) {
  const { isSubmitting } = useFormState({ control: form.control });
  return (
    <Button
      type="submit"
      className="lg:bg-main-color md:bg-main-color bg-orange-400 text-white w-full py-6 font-extrabold w-[200px]"
      disabled={isSubmitting ? true : false}
    >
      {isSubmitting ? "Atualizando..." : "Atualizar"}
    </Button>
  );
}
