"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { chartsData } from "../../actions";
import ProfitDay from "./profit_day";
import ProfitDate from "./profit_date";
import ProfitVolume from "./profit_volume";
import { useSearchParams } from "next/navigation";

export default function Charts() {
  const searchParams = useSearchParams();
  const date = { from: searchParams.get("init"), to: searchParams.get("end") };

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
    const fetch = async () => {
      if (date.from && date.to) {
        const init = format(new Date(date.from), "yyyy-MM-dd");
        const end = format(new Date(date.to), "yyyy-MM-dd");
        const dateRange = { init, end };
        const graphics = await chartsData(dateRange);
        setGraphics(graphics);
      }
    };
    fetch();
  }, [date.from, date.to]);

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
