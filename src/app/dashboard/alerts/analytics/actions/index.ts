"use server";
import { revalidateTag } from "next/cache";
import { VariablesInterfaces } from "../interfaces/variables";
export async function handleAlertsVariables(): Promise<VariablesInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/dashboard/alerts/variables`,
    {
      method: "GET",
      cache: "force-cache",
      next: {
        tags: ["alerts_variables"],
      },
    }
  );
  if (!response.ok) throw new Error("erro na requisição de variáveis");
  return response.json();
}
export async function handleAlertsVariablesSelect(form: FormData) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/alerts/select`, {
    method: "POST",
    body: form,
  });
  revalidateTag("alerts_variables");
}
export async function handleAlertsVariablesUnselect(variable: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/alerts/unselect`, {
    method: "PUT",
    body: JSON.stringify({ variable: variable }),
  });
  revalidateTag("alerts_variables");
}
