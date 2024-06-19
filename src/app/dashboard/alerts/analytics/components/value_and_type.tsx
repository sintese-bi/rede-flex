import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
export default async function ValueAndTypeComponents() {
  return (
    <div className="lg:w-1/3 w-full">
      <p className="w-full text-sm mb-4 font-bold">
        Qual o valor mínimo da margem GC para enviarmos o alerta
      </p>
      <Input type="number" />
      <Select>
        <SelectTrigger className="w-full mt-2">
          <SelectValue placeholder="Tipo do valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="absolute">Absoluto</SelectItem>
          <SelectItem value="percentage">Percentual</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
