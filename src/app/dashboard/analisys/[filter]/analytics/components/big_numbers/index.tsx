"use client";
import { Suspense, useEffect, useState } from "react";
import BigNumbersLoading from "../../loading/big_numbers";
import { format } from "date-fns";
import { bignumbersData } from "../../actions";
import Bignumber from "./big_number";
import { DateInterface } from "../../interfaces/date";
import { BignumbersInterface } from "../../interfaces/big_numbers";

export default function Bignumbers({ date }: DateInterface) {
  const [bignumbers, setBignumbers] = useState<BignumbersInterface>({
    CombustvelLucro: "",
    CustoTotal: 0,
    LucroTotal: 0,
    MelhorDia: "",
    VendaTotal: 0,
    VolumeTotal: 0,
  });
  const [bignumbers_keys, setBignumbers_keys] = useState<string[]>([]);

  useEffect(() => {
    const init = format(date?.from!, "yyyy-MM-dd");
    const end = format(date?.from!, "yyyy-MM-dd");
    const fetch = async () => {
      const date = { init, end };
      const graphics = await bignumbersData(date);
      setBignumbers(graphics);
    };
    fetch();
  }, [date]);

  useEffect(() => {
    const keys = Object.keys(bignumbers) as string[];
    setBignumbers_keys(keys);
  }, [bignumbers]);

  return (
    <Suspense fallback={<BigNumbersLoading />}>
      <div className="flex flex-col gap-1 w-full h-72">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 h-72 justify-center items-center">
          {bignumbers_keys.map((key, index: number) => (
            <Bignumber bignumber={key} value={bignumbers[key]} key={index} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
