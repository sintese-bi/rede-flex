import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

import { AlertCircleIcon, BoltIcon, FuelIcon } from "lucide-react";
import FormComponentsAlerts from "../form";
import {
  handleAlertsVariables,
  handleAlertsVariablesSelect,
} from "../../actions";
import FormComponentsAlertsTable from "./form";
interface TableInterface {
  title: string;
  description: string;
  columns: Array<string>;
  data: Array<any>;
}
export default async function AlertsTable({
  title,
  description,
  columns,
  data,
}: TableInterface) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <div className="flex items-cenetr gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipContent className="text-sm" side="right">
                <p>{description}</p>
              </TooltipContent>
              <TooltipTrigger>
                <AlertCircleIcon size={18} />
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
          <p className="text-sm font-bold text-slate-600">{title}</p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"sm"} className="flex items-center gap-2 text-xs">
              <BoltIcon size={18} />
              Configurar para todos
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6">
            <SheetHeader>
              <SheetTitle>Configuração para todos</SheetTitle>
              <SheetDescription>
                Esse formulário irá definir um valor de alerta para todos.
              </SheetDescription>
            </SheetHeader>
            <FormComponentsAlerts
              handleAlertsVariables={handleAlertsVariables}
              handleAlertsVariablesSelect={handleAlertsVariablesSelect}
            />
          </SheetContent>
        </Sheet>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-main-color hover:bg-main-color rounded-xl">
            {columns.map((column, index) => {
              return (
                <TableHead
                  key={index}
                  className={`text-slate-300 text-xs ${
                    index == 0
                      ? "rounded-l-md"
                      : index == columns.length - 1
                      ? "rounded-r-md"
                      : ""
                  }`}
                >
                  {column}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((dataItem: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex w-3/5 items-center gap-2">
                    <FuelIcon size={18} />
                    <p>{dataItem[0]}</p>
                  </div>
                </TableCell>
                <TableCell className="w-2/5">
                  <FormComponentsAlertsTable
                    handleAlertsVariables={handleAlertsVariables}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
