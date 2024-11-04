"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { createContext } from "react";
import SystemParameterizationModalTrigger from "./trigger";
import SystemParameterizationModalContent from "./content";
import { SystemParameterizationModalProvider } from "./context";
export const ConfigurationContext = createContext<any>(null);
export default function SystemParameterizationModal() {
  return (
    <Dialog defaultOpen={true}>
      <SystemParameterizationModalTrigger />
      <DialogContent
        className="z-50 transition-all duration-300"
        style={{
          width: "max-content",
          maxWidth: "1400px",
        }}
      >
        <DialogHeader>
          <DialogTitle>Setup do Sistema</DialogTitle>
          <DialogDescription>
            Este formulario preenche os parametros da operação
          </DialogDescription>
          <Separator />
        </DialogHeader>
        <SystemParameterizationModalProvider>
          <SystemParameterizationModalContent />
        </SystemParameterizationModalProvider>
      </DialogContent>
    </Dialog>
  );
}
