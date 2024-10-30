"use client";
import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { Separator } from "@/components/ui/separator";
export default function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };
    const intervalId = setInterval(updateDate, 4 * 60 * 1000);
    const handleStorageChange = (event: any) => {
      if (event.key === "update_time") updateDate();
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold">
          Data e hora da Hora da última venda:
        </p>
        <Separator />
      </div>
      <div className="flex justify-center items-center  py-2 rounded-md border-[1px] border-2 gap-2">
        <p className="text-xs font-bold">
          {formatInTimeZone(date, "America/Sao_Paulo", "dd/MM/yyyy HH:mm a")}
        </p>
      </div>
    </div>
  );
}
