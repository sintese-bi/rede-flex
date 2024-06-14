import {
  Table,
  TableBody,
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
interface TableInterface {
  title: string;
}
export default async function LoadingTable({ title }: TableInterface) {
  return (
    <div className="flex flex-col gap-4 animate-fade">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-600">
          Carregando tabela de {title}
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircleIcon size={16} />
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-200  rounded-xl">
            <TableHead className={`text-slate-300 text-xs `}>_</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>...</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
