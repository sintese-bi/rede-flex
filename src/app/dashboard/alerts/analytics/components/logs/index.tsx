import { Separator } from "@/components/ui/separator";
import { handleAlertsLogs } from "../../actions";
import { Badge } from "@/components/ui/badge";
export default async function LogsComponents() {
  const logs = await handleAlertsLogs();
  return (
    <div className="flex flex-col lg:w-3/4 w-full gap-8">
      <div className="flex flex-col w-full gap-2">
        <p className="text-xs font-bold uppercase">Log de alertas</p>
        <Separator />
      </div>
      <div className="grid gap-2 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-6 lg:w-3/4 w-full">
        {logs.map(({ date, name, situation }, index) => (
          <div
            key={index}
            className="flex flex-col w-full bg-slate-200 rounded-md py-4 px-4 gap-4"
          >
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold">{date}</p>
              <p className="text-xs font-bold">{name}</p>
            </div>
            <div className="flex justify-end">
              <Badge
                variant="outline"
                className={`${
                  situation === "solved" ? "bg-green-500" : "bg-red-500"
                }  text-white rounded-md`}
              >
                {situation === "solved" ? "sanado" : "não sanado"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
