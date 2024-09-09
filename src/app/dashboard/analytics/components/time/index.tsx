"use client";
import { format } from "date-fns";
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
      <div className="w-[152px] text-center py-2 rounded-md border-[1px]">
        <p className="text-xs font-bold">{time}</p>
      </div>
    </div>
  );
}
