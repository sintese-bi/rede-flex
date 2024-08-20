import { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";

export interface DateInterface {
  date: DateRange | undefined;
  setDate?: Dispatch<SetStateAction<DateRange | undefined>>;
}
