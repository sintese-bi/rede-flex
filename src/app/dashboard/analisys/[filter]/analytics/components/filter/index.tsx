"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AnalisysComponentsFilter() {
  const pathname = usePathname();
  const splitted_pathname = pathname.split("/");
  const final_pathname = splitted_pathname[splitted_pathname.length - 1];
  const links = [
    {
      href: "/dashboard/analisys/station",
      label: "Posto",
    },
    {
      href: "/dashboard/analisys/regional",
      label: "Regional",
    },
  ];
  return (
    <div className="flex flex-col justify-start items-start gap-4 py-2">
      <div className="flex flex-row gap-4">
        {links.map(({ href, label }) => (
          <Link href={href} className={`text-center text-sm w-16`}>
            {label}
          </Link>
        ))}
      </div>
      <Separator className="h-0.5">
        <div
          className={`w-16 h-full bg-blue-400 translate-x-${
            final_pathname == "station" ? "0" : "20"
          }`}
        ></div>
      </Separator>
    </div>
  );
}
