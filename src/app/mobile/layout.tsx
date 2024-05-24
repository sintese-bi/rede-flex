import DropDownMenu from "@/components/mobile/dropdown-menu"
import {format} from "date-fns"
export default function MobileLayout({
    children
}: {children: React.ReactNode}){
    const datePattern = format(new Date(), "dd/MM/yyyy")
    return (
        <section className="flex flex-col h-screen w-full p-4">
            <div className="flex items-center justify-between w-full">
                <p className="text-sm text-slate-400 font-bold">Bem vindo Rede Flex</p>
                <p className="text-xs text-yellow-400 font-bold">{datePattern}</p>
            </div>
            <div className="mt-12">
                <DropDownMenu />
            </div>
            {children}
        </section>
    )
}