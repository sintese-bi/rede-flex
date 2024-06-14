import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AlertsValueAndType from "./analytics/components/value-and-type";
import AlertsVariableSelect from "./analytics/components/variable-select";
import AlertsWhatsAppNumber from "./analytics/components/whatsapp-number";
import { Suspense } from "react";
export default async function Alerts() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <div className="flex flex-col w-full h-full justify-center items-center">
        <Carousel className="flex w-9/12 h-full justify-center items-center">
          <CarouselContent>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <AlertsVariableSelect />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <AlertsValueAndType />
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-start py-6 px-6">
              <AlertsWhatsAppNumber />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Suspense>
  );
}
