"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Filter({ filter }: { filter: string }) {
  const [translateX, setTranslateX] = useState("0%");

  useEffect(() => {
    setTranslateX(filter === "station" ? "0%" : "100%");
  }, [filter]);
  const searchParams = useSearchParams();
  const { from, to } = {
    from: searchParams.get("init"),
    to: searchParams.get("end"),
  };
  const links = [
    {
      href: `/dashboard/alerts/station`,
      label: "Posto",
    },
    {
      href: `/dashboard/alerts/regional`,
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
          className={`w-16 absolute h-0.5 bg-blue-400 transition-transform duration-300`}
          style={{ transform: `translateX(${translateX})` }}
        ></div>
      </Separator>
    </div>
  );
}
