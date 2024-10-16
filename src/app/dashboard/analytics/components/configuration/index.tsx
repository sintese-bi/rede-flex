"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BoltIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SelectorPerStationOrRegional from "./selectors/per_station_or_regional";
import SelectorPerTMsOrDiscounts from "./selectors/tms_or_discounts";
import { useEffect, useState } from "react";
import {
  handleTMsAndBruteProfit,
  handleTMsAndBruteProfitPerStation,
} from "../../actions";
import FormRegionalConfiguration from "./form_regional";
import FormStationsConfiguration from "./form_stations";
export default function Configuration() {
  const [wantsToViewRegional, setWantsToViewRegional] = useState<boolean>(true);
  const [wantsToViewTMs, setWantsToViewTMs] = useState<boolean>(true);
  const [regionalFormData, setRegionalFormData] = useState<any>(null);
  const [stationsFormData, setStationsFormData] = useState<any>(null);
  useEffect(() => {
    const fetch = async () => {
      const regionalFormData = await handleTMsAndBruteProfit();
      const stationsFormData = await handleTMsAndBruteProfitPerStation();
      console.log(regionalFormData, stationsFormData);
      setRegionalFormData(regionalFormData["data"]);
      setStationsFormData(stationsFormData["data"]);
    };
    fetch();
  }, []);
  useEffect(() => {}, []);
  if (!regionalFormData && !stationsFormData) return <p>Loading...</p>;
  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          <BoltIcon size={18} />
          <p>Configurar TMs e Lucro bruto</p>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`z-50 transition-all duration-300 ${
          wantsToViewRegional ? "max-w-[400px]" : "max-w-[1200px]"
        }`}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Setup do Sistema</DialogTitle>
          <DialogDescription>
            Este formulario preenche os parametros da operação:
          </DialogDescription>
          <Separator />
        </DialogHeader>
        <div>
          <SelectorPerStationOrRegional
            wantsToViewRegional={wantsToViewRegional}
            setWantsToViewRegional={setWantsToViewRegional}
          />
          <SelectorPerTMsOrDiscounts
            wantsToViewTMs={wantsToViewTMs}
            setWantsToViewTMs={setWantsToViewTMs}
          />
        </div>
        <div className="w-auto max-h-[400px] overflow-y-auto z-100">
          {wantsToViewRegional ? (
            <FormRegionalConfiguration
              data={regionalFormData}
              wantsToViewTMs={wantsToViewTMs}
            />
          ) : (
            <FormStationsConfiguration
              data={stationsFormData}
              wantsToViewTMs={wantsToViewTMs}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
