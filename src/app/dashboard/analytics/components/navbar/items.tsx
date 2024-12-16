import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { defaultDateFilter } from "@/utils";
import {
  LogOutIcon,
  TriangleAlertIcon,
  HomeIcon,
  BarChartHorizontalIcon,
} from "lucide-react";
import Link from "next/link";
export default function DashboardComponentsNavbarItems() {
  const { init, end } = defaultDateFilter();
  return (
    <div className="flex flex-col justify-between top-16 left-2 bg-main-color h-full rounded-xl px-4 py-4 group">
      <div className="flex flex-col text-white font-medium w-full gap-6">
        <div className="flex justify-center gap-2 items-center py-1 w-full cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Link
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer"
          href={"/dashboard"}
        >
          <HomeIcon size={22} />
          <p className="hidden group-hover:block text-xs">Home</p>
        </Link>
        <Link
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-not-allowed opacity-35"
          href={"/dashboard"}
        >
          <TriangleAlertIcon size={22} />
          <p className="hidden group-hover:block text-xs">Alertas</p>
        </Link>
        <Link
          className="flex justify-center group-hover:justify-start gap-2 items-center py-1 w-full cursor-not-allowed opacity-35"
          href={`/dashboard`}
        >
          <BarChartHorizontalIcon size={22} />
          <p className="hidden group-hover:block text-xs">Análises</p>
        </Link>
      </div>
      <Link
        className="flex items-center gap-2 rounded-md bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 px-4 py-2 text-md"
        href={"/"}
      >
        <LogOutIcon size={22} />
        <p className="hidden group-hover:block text-xs">Sair</p>
      </Link>
    </div>
  );
}
