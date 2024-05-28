"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
export default async function DataButton() {
  const router = useRouter();
  return (
    <Button
      className="w-full h-1/3 rounded-xl bg-orange-400 hover:bg-orange-600"
      onClick={() => router.push("/mobile/data")}
    >
      Dados
    </Button>
  );
}
