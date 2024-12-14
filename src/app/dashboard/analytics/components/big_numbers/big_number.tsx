"use client";
import { BigNumbersInterfaces } from "../../interfaces/big_numbers";
import { BigNumberFirstSection } from "./bigNumber/firstSection";
import BigNumberSecondSection from "./bigNumber/secondSection";
import BigNumberThirdSection from "./bigNumber/thirdSection";
export default function DashboardComponentsBigNumber({
  label,
  value,
  secondary_label,
  secondary_value,
  third_value,
  fourth_label,
  fourth_value,
  fifth_label,
  fifth_value,
  sixth_value,
  seventh_label,
  seventh_value,
  eighth_label,
  eighth_value,
  ninth_label,
  ninth_value,
  tenth_value,
}: BigNumbersInterfaces) {
  return (
    <div className="flex flex-1 flex-grow h-full min-h-[162px] py-4 px-4 rounded-lg bg-main-color items-center justify-between shadow-md">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-between">
          <BigNumberFirstSection
            value={value}
            label={label}
            third_value={third_value}
            eighth_label={eighth_label}
            eighth_value={eighth_value}
            tenth_value={tenth_value}
            ninth_value={ninth_value}
          />
        </div>
        <div className="flex justify-between w-full">
          <BigNumberSecondSection
            secondary_label={secondary_label}
            secondary_value={secondary_value}
            fifth_label={fifth_label}
            fifth_value={fifth_value}
            fourth_label={fourth_label}
            fourth_value={fourth_value}
            third_value={third_value}
          />
          <BigNumberThirdSection
            fifth_label={fifth_label}
            fifth_value={fifth_value}
            sixth_value={sixth_value}
            seventh_label={seventh_label}
            seventh_value={seventh_value}
          />
        </div>
      </div>
    </div>
  );
}
