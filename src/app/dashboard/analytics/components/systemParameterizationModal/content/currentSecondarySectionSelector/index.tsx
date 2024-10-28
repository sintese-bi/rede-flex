import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
export default function CurrentSecondarySectionSelector({
  currentSecondarySection,
  setCurrentSecondarySection,
}: {
  currentSecondarySection: 0 | 1;
  setCurrentSecondarySection: Dispatch<SetStateAction<0 | 1>>;
}) {
  const selectedStyle = "border-b-[1px] border-main-color rounded-none";
  function handleOnClick(value: 0 | 1) {
    setCurrentSecondarySection(value);
  }
  return (
    <div className="flex justify-center w-full gap-4 my-4">
      <Button
        variant="ghost"
        type="button"
        className={`border-0 ${
          currentSecondarySection == 0 ? selectedStyle : null
        }`}
        onClick={() => handleOnClick(0)}
      >
        TMs
      </Button>
      <Button
        variant="ghost"
        type="button"
        className={`border-0 ${
          currentSecondarySection != 0 ? selectedStyle : null
        }`}
        onClick={() => handleOnClick(1)}
      >
        Descontos de combustiveis
      </Button>
    </div>
  );
}
