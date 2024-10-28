import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IRegionalsSectionsFields } from "../../fields/regional";
import { IStationsSectionsFields } from "../../fields/station";
interface ISection {
  section: IStationsSectionsFields[] | IRegionalsSectionsFields[];
  data: any;
  onInputChange: any;
}
export default function Section({ section, data, onInputChange }: ISection) {
  const sectionInputFields = section.filter(
    (field) => field["isInputField"] == true
  );
  return sectionInputFields.map((fieldItem, index: number) => {
    return (
      <div key={index} className={`flex flex-col gap-4`}>
        <Label htmlFor={fieldItem.accessorKey}>{fieldItem.header}</Label>
        <Input
          name={fieldItem.accessorKey}
          value={data[fieldItem.accessorKey] || 0}
          onChange={(e) => onInputChange(fieldItem.accessorKey, e.target.value)}
          className="col-span-3"
          type="number"
          min="0"
          step="0.0001"
        />
      </div>
    );
  });
}
