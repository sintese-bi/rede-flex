import ReportsCalenderPicker from "@/components/mobile/reports/calender-picker";
import { Button } from "@/components/ui/button";
export default async function Reports() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-6">
      <p className="font-medium">Defina a data do relatório</p>
      <ReportsCalenderPicker />
      <Button>Baixar Relatório</Button>
      <p className="w-8/12 text-center text-xs text-black/40 font-bold">
        O relatório fornece o resumo da perfomance de todos os postos.
      </p>
    </div>
  );
}
