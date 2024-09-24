"use client";

import { useState, useEffect } from "react";
import { formatInTimeZone } from "date-fns-tz";

export default function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center w-[152px] py-2 rounded-md border-[1px] border-2 gap-2">
      <p className="text-xs font-bold">
        {formatInTimeZone(date, "America/Sao_Paulo", "dd/MM/yyyy HH:mm a")}
      </p>
    </div>
  );
}
