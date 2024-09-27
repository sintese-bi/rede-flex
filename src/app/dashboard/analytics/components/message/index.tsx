import { AlertCircleIcon } from "lucide-react";
import { handleDataframes } from "../../actions";
export default async function Message({
  message,
  variant,
  position,
}: {
  message: string;
  variant: "warning" | "neutral";
  position: "left" | "center";
}) {
  return (
    <div
      className={`flex ${
        position == "center" ? "justify-center" : "justify-start"
      } w-full p-2`}
    >
      <div
        className={`flex items-center  gap-2 p-4 ${
          variant == "warning" ? "bg-red-50" : "bg-main-color text-gray-200"
        } rounded-md`}
      >
        <AlertCircleIcon size={18} />
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
