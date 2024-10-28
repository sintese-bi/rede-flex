"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { createContext, useContext } from "react";
import { SystemParameterizationModalContext } from "./context";
import SystemParameterizationModalTrigger from "./trigger";
import SystemParameterizationModalContent from "./content";
export const ConfigurationContext = createContext<any>(null);
export default function SystemParameterizationModal() {
  const {
    data,
    currentSection,
    currentSecondarySection,
    handleData,
    setCurrentSection,
    setCurrentSecondarySection,
  } = useContext(SystemParameterizationModalContext)!;
  return (
    <Dialog defaultOpen={true}>
      <SystemParameterizationModalTrigger />
      <DialogContent
        className={`z-50 transition-all duration-300 ${
          currentSection == 0 ? "max-w-[400px]" : "max-w-[1400px]"
        }`}
      >
        <DialogHeader>
          <DialogTitle>Setup do Sistema</DialogTitle>
          <DialogDescription>
            Este formulario preenche os parametros da operação
          </DialogDescription>
          <Separator />
        </DialogHeader>
        <SystemParameterizationModalContent
          data={data}
          currentSection={currentSection}
          currentSecondarySection={currentSecondarySection}
          handleData={handleData}
          setCurrentSection={setCurrentSection}
          setCurrentSecondarySection={setCurrentSecondarySection}
        />
      </DialogContent>
    </Dialog>
  );
}
