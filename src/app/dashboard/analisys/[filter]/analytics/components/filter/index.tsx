"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function Filter({ filter }: { filter: string }) {
  const searchParams = useSearchParams();
  const { from, to } = {
    from: searchParams.get("init"),
    to: searchParams.get("end"),
  };
  const links = [
    {
      href: `/dashboard/analisys/station?init=${from}&end=${to}`,
      label: "Posto",
    },
    {
      href: `/dashboard/analisys/regional?init=${from}&end=${to}`,
      label: "Regional",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-4 py-2">
      <div className="flex flex-row gap-4">
        {links.map(({ href, label }, index: number) => (
          <Link href={href} className={`text-center text-sm w-16`} key={index}>
            {label}
          </Link>
        ))}
      </div>
      <Separator className="relative w-full">
        <div
          className={`w-16 absolute h-0.5 bg-blue-400 transition-transform duration-300 translate-x-${
            filter === "station" ? "0" : "20"
          }`}
        ></div>
      </Separator>
    </div>
  );
}
