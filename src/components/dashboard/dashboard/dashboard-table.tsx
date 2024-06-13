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
  description: string;
  columns: Array<string>;
  data: Array<any>;
}
function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function DashboardTable({
  title,
  description,
  columns,
  data,
}: TableInterface) {
  await sleep(2000);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-slate-600">{title}</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertCircleIcon size={16} />
            </TooltipTrigger>
            <TooltipContent className="text-sm" side="right">
              <p>{description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
                {dataItem.map((dataItemContent: any, index: number) => {
                  return <TableCell key={index}>{dataItemContent}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
