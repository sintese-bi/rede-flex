"use client";

import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Realod() {
  const router = useRouter();

  const handleReload = () => {
    router.refresh();
  };
  return (
    <Button
      onClick={handleReload}
      className="flex justify-center items-center w-[152px] py-2 rounded-md border-[1px] bg-main-color text-white gap-2"
    >
      <RefreshCcwIcon size={16} />
      <p className="text-xs font-bold">Atualizar</p>
    </Button>
  );
}
