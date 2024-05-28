import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AlertsVariableSelect from "@/components/mobile/alerts/alerts-variable-select";
import AlertsValueAndType from "@/components/mobile/alerts/alerts-value-and-type";
import AlertsWhatsAppNumber from "@/components/mobile/alerts/alerts-whatsapp-number";
export default async function Alerts() {
  return (
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
  );
}
