import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Suspense } from "react";
import WhatsAppNumberComponents from "./analytics/components/whatsapp_number";
import ValueAndTypeComponents from "./analytics/components/value_and_type";
import VariableSelectComponents from "./analytics/components/variable_select";
export default async function Alerts() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <Carousel className="flex w-9/12 h-full justify-center items-center">
          <CarouselContent>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <VariableSelectComponents />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <ValueAndTypeComponents />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <WhatsAppNumberComponents />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Suspense>
  );
}
