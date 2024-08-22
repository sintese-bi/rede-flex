"use client";
import { Suspense, useEffect, useState } from "react";
import BigNumbersLoading from "../../loading/big_numbers";
import { bignumbersData } from "../../actions";
import Bignumber from "./big_number";
import { BignumbersInterface } from "../../interfaces/big_numbers";
import { useSearchParams } from "next/navigation";

export default function Bignumbers() {
  const searchParams = useSearchParams();
  const date = { from: searchParams.get("init"), to: searchParams.get("end") };
  const [bignumbers, setBignumbers] = useState<BignumbersInterface>({
    CombustvelLucro: "",
    CustoTotal: 0,
    LucroTotal: 0,
    MelhorDia: "",
    VendaTotal: 0,
    VolumeTotal: 0,
  });

  useEffect(() => {
    const fetch = async () => {
      const init = date.from ? date.from : ""; // verificar se `date.from` não é nulo
      const end = date.to ? date.to : ""; // verificar se `date.to` não é nulo
      const dateRange = { init, end };
      const graphics = await bignumbersData(dateRange);
      setBignumbers(graphics);
    };
    if (date.from && date.to) {
      fetch();
    }
  }, [date.from, date.to]); // Dependências claras para o `useEffect`

  const bignumbers_keys = Object.keys(bignumbers) as string[];

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
