import { Suspense } from "react";
import AnalisysComponentsBigNumber from "./big_number";
import BigNumbersLoading from "../../loading/big_numbers";
import { handleAnalisysBigNumbers } from "../../actions";
export default async function AnalisysComponentsBigNumbers() {
  const bigNumbersData = await handleAnalisysBigNumbers();
  return (
    <Suspense fallback={<BigNumbersLoading />}>
      <div className="flex flex-col gap-1 w-full h-72">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 h-72 justify-center items-center">
          {bigNumbersData.map((bigNumber: any, index: number) => (
            <AnalisysComponentsBigNumber bigNumber={bigNumber} key={index} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
