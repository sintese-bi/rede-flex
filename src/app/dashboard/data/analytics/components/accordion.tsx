import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
export default async function DataAccordion() {
  return (
    <Accordion type="single" collapsible className="w-9/12">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm font-bold text-black/60">
          Quais dados você quer importar ?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Margem GC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Margem AL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Margem Total
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Volume GC
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Volume AL
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="h-6 w-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Volume Total
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
