"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  User2Icon,
  LogOutIcon,
  TriangleAlertIcon,
  FilesIcon,
  ArrowDownUpIcon,
  HomeIcon,
  BarChartHorizontalIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
export default function NavbarItems() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between top-16 left-2 bg-main-color h-full rounded-xl px-4 py-4 group">
      <div className="flex flex-col text-white font-medium w-full gap-6">
        <div className="flex justify-center gap-2 items-center py-1 w-full cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <HomeIcon size={22} />
          <p className="hidden group-hover:block text-xs">Home</p>
        </div>
        <div
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer"
          onClick={() => router.push("/dashboard/analisys")}
        >
          <BarChartHorizontalIcon size={22} />
          <p className="hidden group-hover:block text-xs">Análises</p>
        </div>
        <div
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer"
          onClick={() => router.push("/dashboard/alerts")}
        >
          <TriangleAlertIcon size={22} />
          <p className="hidden group-hover:block text-xs">Alertas</p>
        </div>
        <div
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer"
          onClick={() => router.push("/dashboard/reports")}
        >
          <FilesIcon size={22} />
          <p className="hidden group-hover:block text-xs">Relatórios</p>
        </div>
      </div>
      <Button className="w-full flex gap-2">
        <LogOutIcon size={22} />
        <p className="hidden group-hover:block text-xs">Sair</p>
      </Button>
    </div>
  );
}
