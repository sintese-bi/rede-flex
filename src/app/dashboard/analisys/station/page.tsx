"use client";
import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import DataPicker from "./analytics/components/data_picker";
import Bignumbers from "./analytics/components/big_numbers";
import Charts from "./analytics/components/charts";

export default function Station() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 30),
  });

  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <div className="flex flex-col gap-6 h-full w-full">
        <DataPicker date={date} setDate={setDate} />
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col items-start gap-6">
          <Bignumbers date={date} />
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <Charts date={date} />
        </div>
      </div>
    </div>
  );
}
