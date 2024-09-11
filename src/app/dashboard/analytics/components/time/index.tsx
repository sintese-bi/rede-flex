"use client";
import { format } from "date-fns";
import { ClockIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(format(new Date(), "HH:mm a dd/MM/yyyy"));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(format(new Date(), "HH:mm a dd/MM/yyyy"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">Ultima atualização às:</p>
      <div className="flex justify-center items-center gap-2 w-[182px] p-2 rounded-md border-[1px]">
        <ClockIcon size={14} />
        <p className="text-xs font-bold">{time}</p>
      </div>
    </div>
  );
}
