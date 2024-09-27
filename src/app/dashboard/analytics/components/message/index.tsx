import { AlertCircleIcon } from "lucide-react";
import { handleDataframes } from "../../actions";
export default async function Message() {
  const { lowerThanAvarageCount } = await handleDataframes();
  return (
    <div className="flex justify-center w-full p-2">
      <div className="flex items-center  gap-2 p-4 bg-red-50 rounded-md">
        <AlertCircleIcon size={18} />
        <p className="text-sm">
          {`
            Prezado usuário até o momento ${lowerThanAvarageCount["M/LT"]} postos estão abaixo da M/LT médio da Rede.
            ${lowerThanAvarageCount["TMP"]} postos estão com
            TMP abaixo da média da Rede.
            `}
        </p>
      </div>
    </div>
  );
}
