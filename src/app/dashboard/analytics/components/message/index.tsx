import { Badge } from "@/components/ui/badge";
import { AlertCircleIcon } from "lucide-react";
export default function Message({
  messages,
  variant,
  position,
}: {
  messages: {
    label: string;
    value: number;
  }[];
  variant: "warning" | "neutral";
  position: "left" | "center";
}) {
  return (
    <div className="flex flex-wrap gap-2 px-2">
      {messages.map((message, index) => (
        <Badge
          key={index}
          className="inline-flex items-center p-2 rounded-md space-x-2 min-h-[46px]"
        >
          <AlertCircleIcon size={18} />
          <p className="text-xs">{message.label}</p>
          <p className="text-xs">{message.value}</p>
        </Badge>
      ))}
    </div>
  );
}
