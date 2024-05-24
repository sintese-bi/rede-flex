import AlertsButton from "@/components/mobile/alerts-button";
import DataButton from "@/components/mobile/data-button";
import ReportsButton from "@/components/mobile/reports-button";

export default async function Mobile(){
    return (
        <main className="flex flex-col justify-center items-center w-full h-full gap-4 mt-6">
            <AlertsButton />
            <ReportsButton/>
            <DataButton />
        </main>
    )
}