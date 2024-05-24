'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
export default function DropDownMenu() {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="px-6 py-2 bg-gray-700 text-white text-sm rounded-md font-medium ">Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu navegação</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/mobile")}>Home</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/mobile/alerts")}>Alertas</DropdownMenuItem>
              <DropdownMenuItem disabled={true}>Relatórios</DropdownMenuItem>
              <DropdownMenuItem disabled={true}>Dados</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}