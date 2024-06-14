import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
export default async function AlertsValueAndType() {
  return (
    <div>
      <p className="w-full font-medium mb-6">
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
