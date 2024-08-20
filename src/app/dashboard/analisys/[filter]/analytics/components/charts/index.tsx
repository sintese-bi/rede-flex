"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { chartsData } from "../../actions";
import ProfitDay from "./profit_day";
import ProfitDate from "./profit_date";
import ProfitVolume from "./profit_volume";
export default function Charts({ date }: { date: DateRange | undefined }) {
  const [graphics, setGraphics] = useState<{
    LucroDia: [];
    LucroTempo: [];
    VolumeLucro: [];
  }>({
    LucroDia: [],
    LucroTempo: [],
    VolumeLucro: [],
  });
  const profit_day_data = graphics["LucroDia"];
  const profit_date_data = graphics["LucroTempo"];
  const profit_volume_data = graphics["VolumeLucro"];

  useEffect(() => {
    const init = format(date?.from!, "yyyy-MM-dd");
    const end = format(date?.from!, "yyyy-MM-dd");
    const fetch = async () => {
      const date = { init, end };
      const graphics = await chartsData(date);
      setGraphics(graphics);
    };
    fetch();
  }, [date]);

  return (
    <>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
        <ProfitDay data={profit_day_data} />
        <ProfitDate data={profit_date_data} />
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col gap-2 h-96">
        <ProfitVolume data={profit_volume_data} />
      </div>
    </>
  );
}
