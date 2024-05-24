"use client"
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'
export default function AlertsButton() {
    const router = useRouter()
    return <Button className="w-full h-1/3 rounded-xl" onClick={() => router.push("/mobile/alerts")}>Alertas</Button>
}