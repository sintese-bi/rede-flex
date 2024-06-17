"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownUpIcon,
  BarChartHorizontalBigIcon,
  BarChartHorizontalIcon,
  DeleteIcon,
  FilesIcon,
  HomeIcon,
  MenuIcon,
  PlusCircleIcon,
  TriangleAlertIcon,
  User2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function NavbarMenuDropDown() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-1 py-1 bg-main-color text-white text-sm rounded-md font-medium ">
        <MenuIcon size={28} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuLabel>Menu navegação</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/dashboard")}>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <HomeIcon size={22} />
            <p className="text-xs">Home</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/analisys")}>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <BarChartHorizontalBigIcon size={22} />
            <p className="text-xs">Análises</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/alerts")}>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <TriangleAlertIcon size={22} />
            <p className="text-xs">Alertas</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/dashboard/reports")}>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <FilesIcon size={22} />
            <p className="text-xs">Relatórios</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
