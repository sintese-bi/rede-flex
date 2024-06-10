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
  BoltIcon,
  DeleteIcon,
  FilesIcon,
  HomeIcon,
  LucideFiles,
  MenuIcon,
  PlusCircleIcon,
  TriangleAlertIcon,
  User2Icon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <HomeIcon size={22} />
            <p className="text-xs">Home</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <User2Icon size={22} />
            <p className=" text-xs">Usuário</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <PlusCircleIcon size={22} />
            <p className=" text-xs">Inserir postos</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <BoltIcon size={22} />
            <p className=" text-xs">Configurar alertas</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <LucideFiles size={22} />
            <p className=" text-xs">Relatórios</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <DeleteIcon size={22} />
            <p className="text-xs">Deletar postos</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <TriangleAlertIcon size={22} />
            <p className="text-xs">Alertas</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <FilesIcon size={22} />
            <p className="text-xs">Relatórios</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex justify-start group-hover:justify-start gap-2 items-center py-1 w-full cursor-pointer">
            <ArrowDownUpIcon size={22} />
            <p className="text-xs">Dados</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
