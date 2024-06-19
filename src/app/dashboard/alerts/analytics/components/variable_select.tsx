import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default async function VariableSelectComponents() {
  return (
    <Select>
      <p className="w-full font-medium mb-6">
        Defina a variável a ser monitorada:
      </p>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Variáveis" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="margem_gc">Margem GC</SelectItem>
        <SelectItem value="margem_al">Margem AL</SelectItem>
        <SelectItem value="margem_total">Margem Total</SelectItem>
        <SelectItem value="volume_gc">Volume GC</SelectItem>
        <SelectItem value="volume_al">Volume AL</SelectItem>
        <SelectItem value="volume_total">Volume Total</SelectItem>
      </SelectContent>
    </Select>
  );
}
