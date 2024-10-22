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
import { createContext, useEffect, useState } from "react";
import {
  handleTMsAndBruteProfit,
  handleTMsAndBruteProfitPerRegional,
  handleTMsAndBruteProfitPerStation,
} from "../../actions";
import FormRegionalConfiguration from "./form_rede";
import FormStationsConfiguration from "./form_stations";
import { rede_fields } from "./fields/rede";
import { getStationsFields } from "./fields/station";
import { getRegionalFields } from "./fields/regional";
export const ConfigurationContext = createContext<any>(null);
export default function Configuration() {
  const [sections, setSections] = useState<any>(null);
  const [stationsFormState, setStationsFormState] = useState<any>(null);
  const [wantsToViewRegional, setWantsToViewRegional] =
    useState<boolean>(false);
  const [wantsToViewRede, setWantsToViewRede] = useState<boolean>(true);
  const [wantsToViewTMs, setWantsToViewTMs] = useState<boolean>(true);
  async function handleData() {
    const redeFormData = await handleTMsAndBruteProfit();
    const stationsFormData = await handleTMsAndBruteProfitPerStation();
    const regionalFormData = await handleTMsAndBruteProfitPerRegional();
    setSections({
      0: {
        data: redeFormData["data"],
        fields: rede_fields,
      },
      1: {
        data: stationsFormData["data"],
        fields: getStationsFields().getAsColumns(),
      },
      2: {
        data: regionalFormData["data"],
        fields: getRegionalFields().getAsColumns(),
      },
    });
  }
  useEffect(() => {
    handleData();
  }, []);
  if (!sections) return <p>Loading...</p>;
  return (
    <ConfigurationContext.Provider value={{ wantsToViewTMs, handleData }}>
      <Dialog defaultOpen={true}>
        <DialogTrigger asChild>
          <Button className="flex gap-2">
            <BoltIcon size={18} />
            <p>Parametrização do sistema</p>
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`z-50 transition-all duration-300 ${
            wantsToViewRede ? "max-w-[400px]" : "max-w-[1400px]"
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
              wantsToViewRede={wantsToViewRede}
              setWantsToViewRede={setWantsToViewRede}
              wantsToViewRegional={wantsToViewRegional}
              setWantsToViewRegional={setWantsToViewRegional}
            />
            <SelectorPerTMsOrDiscounts
              wantsToViewTMs={wantsToViewTMs}
              setWantsToViewTMs={setWantsToViewTMs}
            />
          </div>
          <div className="w-auto max-h-[400px] overflow-y-auto z-100">
            {wantsToViewRede ? (
              <FormRegionalConfiguration
                data={sections[0]["data"]}
                fields={sections[0]["fields"]}
              />
            ) : wantsToViewRegional ? (
              <FormStationsConfiguration
                data={sections[2]["data"]}
                fields={sections[2]["fields"]}
              />
            ) : (
              <FormStationsConfiguration
                data={sections[1]["data"]}
                fields={sections[1]["fields"]}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </ConfigurationContext.Provider>
  );
}
