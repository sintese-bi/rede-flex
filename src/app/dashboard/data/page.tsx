import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import AccordionComponents from "./analytics/components/accordion";
import DataPickerComponents from "./analytics/components/data_picker";
export default async function Data() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <div className="flex flex-col w-full h-full justify-center items-center gap-6">
        <p className="font-medium">Defina o intervalo de dados</p>
        <DataPickerComponents />
        <AccordionComponents />
        <p className="w-8/12 text-center text-xs text-black/40 font-bold">
          O relatório fornece o resumo da perfomance de todos os postos.
        </p>
        <Button>Exportar XLSX</Button>
      </div>
    </Suspense>
  );
}
