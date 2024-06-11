import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
export default async function DashboardTable() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-600">Listagem de postos</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircleIcon size={16} />
            </TooltipTrigger>
            <TooltipContent className="text-sm" side="right">
              <p>Listagem contendo as principais informações de cada posto!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="bg-main-color hover:bg-main-color rounded-xl">
            <TableHead className="text-slate-300 text-xs rounded-l-md">
              Rank
            </TableHead>
            <TableHead className="text-slate-300 text-xs">Postos</TableHead>
            <TableHead className="text-slate-300 text-xs">Vendas</TableHead>
            <TableHead className="text-slate-300 text-xs">
              Abastecimento
            </TableHead>
            <TableHead className="text-slate-300 text-xs">TMP</TableHead>
            <TableHead className="text-slate-300 text-xs">Meta</TableHead>
            <TableHead className="text-slate-300 text-xs">Desempenho</TableHead>
            <TableHead className="text-slate-300 text-xs">
              Enviar relatório
            </TableHead>
            <TableHead className="text-slate-300 text-xs rounded-r-md">
              Postos em alerta
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
            <TableCell>_</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
