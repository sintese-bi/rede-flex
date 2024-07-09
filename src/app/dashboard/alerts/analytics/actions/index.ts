"use server";
import { revalidateTag } from "next/cache";
import { VariablesInterfaces } from "../interfaces/variables";
import { AlertsInterfaces } from "../interfaces/alerts";
export async function handleAlertsVariables(): Promise<VariablesInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/alerts/variables`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["alerts_variables"],
      },
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  return response.json();
}
export async function handleAlertsVariablesSelect(form: FormData) {
  const rowData = {
    variable: form.get("variable"),
    margin_min_value: form.get("margin_min_value"),
    margin_min_value_type: form.get("margin_min_value_type"),
    whatsapp_contact: form.get("whatsapp_contact"),
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/alerts/select`,
    {
      method: "PUT",
      body: JSON.stringify(rowData),
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  revalidateTag("alerts_variables");
}
export async function handleAlertsVariablesUnselect(variable: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/alerts/unselect`,
    {
      method: "PUT",
      body: JSON.stringify({ variable: variable }),
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  revalidateTag("alerts_variables");
}
export async function handleAlertsLogs(): Promise<AlertsInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/dashboard/alerts`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["alerts"],
      },
    }
  );
  if (!response.ok) {
    const errorResponse = await response.json();
    const errorMessage = errorResponse.message || "Error";
    throw new Error(`${response.status}: ${errorMessage}`);
  }
  return response.json();
}
