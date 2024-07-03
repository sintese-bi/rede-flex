import { Suspense } from "react";
import BigNumbersLoading from "../loading/big_numbers";
import { handleanalisysBigNumbers } from "../actions";
export default async function BigNumbersComponents() {
  const bigNumbersData = await handleanalisysBigNumbers();
  return (
    <Suspense fallback={<BigNumbersLoading />}>
      <div className="flex flex-col gap-1 w-full h-72">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 grid-cols-2 h-72 justify-center items-center">
          {bigNumbersData.map((bigNumber: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-4 h-full lg:px-8 md:px-8 sm:px-4 xs:px-4 px-4 rounded-lg bg-main-color  justify-center"
            >
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg md:text-lg text-sm font-extrabold text-slate-400">
                  {bigNumber["label"]}
                </p>
                <div className="flex items-center gap-1">
                  {bigNumber["icon"]}
                  <p className="lg:text-md md:text-md text-sm font-bold text-slate-200">
                    {bigNumber["value"]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
