import ReportsCalenderPicker from "@/app/dashboard/reports/analytics/components/calender-picker";
import { Button } from "@/components/ui/button";
import DataAccordion from "./analytics/components/accordion";
import { Suspense } from "react";
export default async function Data() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <div className="flex flex-col w-full h-full justify-center items-center gap-6">
        <p className="font-medium">Defina o intervalo de dados</p>
        <ReportsCalenderPicker />
        <DataAccordion />
        <p className="w-8/12 text-center text-xs text-black/40 font-bold">
          O relatório fornece o resumo da perfomance de todos os postos.
        </p>
        <Button>Exportar XLSX</Button>
      </div>
    </Suspense>
  );
}
