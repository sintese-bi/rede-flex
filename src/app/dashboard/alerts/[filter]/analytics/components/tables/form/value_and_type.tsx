"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ValueAndType({
  selectedVariableValue,
}: {
  selectedVariableValue: number;
}) {
  return (
    <>
      <Input
        type="number"
        name="margin_min_value"
        defaultValue={selectedVariableValue}
        className="w-24"
        step={0.01}
      />
    </>
  );
}
