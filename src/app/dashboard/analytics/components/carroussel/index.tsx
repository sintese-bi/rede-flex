"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Autoplay from "embla-carousel-autoplay";
import { AlertCircleIcon } from "lucide-react";

export default function Carroussel({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2 lg:w-full w-full">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-bold text-slate-600">
            Margens de combustíveis
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AlertCircleIcon size={16} />
              </TooltipTrigger>
              <TooltipContent className="text-sm" side="right">
                <p>Informações das margens!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <Separator />
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="relative"
      >
        <CarouselContent className="space-x-2 px-4">
          {data.map((item: { fuel_name: string; value: number }) => (
            <CarouselItem
              key={item.fuel_name}
              className="basis-1/3 flex flex-col justify-center w-[160px] min-h-[120px] bg-main-color p-4 rounded-md h-full"
            >
              <p className="text-sm text-slate-400 font-bold">
                {item.fuel_name}
              </p>
              <p className="text-sm text-white">R$ {item.value}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
