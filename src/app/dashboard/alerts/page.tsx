import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AlertsValueAndType from "../../../components/dashboard/alerts/alerts-value-and-type";
import AlertsVariableSelect from "../../../components/dashboard/alerts/alerts-variable-select";
import AlertsWhatsAppNumber from "../../../components/dashboard/alerts/alerts-whatsapp-number";
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
