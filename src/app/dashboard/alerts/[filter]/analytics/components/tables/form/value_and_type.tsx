"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ValueAndType() {
  return (
    <>
      <Input
        type="number"
        name="margin_min_value"
        defaultValue={0}
        className="w-24"
        step={0.01}
      />
      <Select name="margin_min_value_type" defaultValue="absolute">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Tipo do valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="absolute">Absoluto</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
