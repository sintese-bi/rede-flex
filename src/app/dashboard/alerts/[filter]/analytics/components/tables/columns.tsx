"use client";
import { ColumnDef } from "@tanstack/react-table";
import FormComponentsAlertsTable from "./form";
export type Alerts = {
  name: string;
  gas_station_id: string;
  alerts_configuration: string;
  gas_station_whats_app: string;
};
export const columns: ColumnDef<Alerts>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "gas_station_id",
    header: "ID",
  },
  {
    accessorKey: "alerts_configuration",
    header: "configurar alertas",
    cell: ({ row }) => (
      <FormComponentsAlertsTable
        ibm_id={row.original.gas_station_id}
        gas_station_whats_app={row.original.gas_station_whats_app}
      />
    ),
  },
  {
    accessorKey: "gas_station_whats_app",
    header: "gas_station_whats_app",
  },
];
