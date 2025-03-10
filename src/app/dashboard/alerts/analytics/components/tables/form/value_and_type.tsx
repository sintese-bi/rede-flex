import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default async function ValueAndType() {
  return (
    <>
      <Input
        type="number"
        name="margin_min_value"
        defaultValue={0}
        className="w-24"
      />
      <Select name="margin_min_value_type">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Tipo do valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="absolute">Absoluto</SelectItem>
          <SelectItem value="percentage">Percentual</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
