"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
export default function ReportsButton() {
  const router = useRouter();
  return (
    <Button
      className="w-full h-1/3 rounded-xl bg-green-800 hover:bg-green-950"
      onClick={() => router.push("/mobile/reports")}
    >
      Relatórios
    </Button>
  );
}
