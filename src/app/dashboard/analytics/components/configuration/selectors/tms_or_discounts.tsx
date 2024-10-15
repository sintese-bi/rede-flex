import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
export default function SelectorPerTMsOrDiscounts({
  wantsToViewTMs,
  setWantsToViewTMs,
}: {
  wantsToViewTMs: boolean;
  setWantsToViewTMs: Dispatch<SetStateAction<boolean>>;
}) {
  function handleOnClick(value: string) {
    value == "TMs" ? setWantsToViewTMs(true) : setWantsToViewTMs(false);
  }
  return (
    <div className="flex justify-center w-full gap-4 my-4">
      <Button
        variant="ghost"
        type="button"
        className={`border-0 ${
          wantsToViewTMs ? "border-b-[1px] border-main-color rounded-none" : ""
        }`}
        onClick={() => handleOnClick("TMs")}
      >
        TMs
      </Button>
      <Button
        variant="ghost"
        type="button"
        className={`border-0 ${
          !wantsToViewTMs ? "border-b-[1px] border-main-color rounded-none" : ""
        }`}
        onClick={() => handleOnClick("discounts")}
      >
        Descontos de combustiveis
      </Button>
    </div>
  );
}
