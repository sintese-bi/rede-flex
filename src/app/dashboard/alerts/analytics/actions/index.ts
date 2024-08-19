"use server";
import { revalidateTag } from "next/cache";
import { VariablesInterfaces } from "../interfaces/variables";
import { AlertsInterfaces } from "../interfaces/alerts";
import { ObjectId } from "mongodb";
import { mongodb_client } from "@/database/connection";
import { apiRequestConfig } from "@/utils";
export async function handleAlertsVariables(): Promise<VariablesInterfaces[]> {
  const redeflex = mongodb_client.db("redeflex");
  const collection = redeflex.collection("alerts");
  const { variables }: { variables: VariablesInterfaces[] } =
    (await collection.findOne({
      _id: new ObjectId("66872ee8a47db2d310066cfb"),
    })) as any;
  return variables;
}
export async function handleAlertsVariablesSelect(form: FormData) {
  const redeflex = mongodb_client.db("redeflex");
  const collection = redeflex.collection("alerts");
  const variable = form.get("variable");
  const margin_min_value = form.get("margin_min_value");
  const margin_min_value_type = form.get("margin_min_value_type");
  const whatsapp_contact = form.get("whatsapp_contact");
  const existentContent = await collection.findOne({
    _id: new ObjectId("66872ee8a47db2d310066cfb"),
  });
  const { variables, alerts } = gettingVariablesAndAlerts(existentContent);
  const updatedVariables = gettingUpdatedVariables(
    variables,
    variable,
    whatsapp_contact,
    margin_min_value,
    margin_min_value_type
  );
  await collection.updateOne(
    {
      _id: new ObjectId("66872ee8a47db2d310066cfb"),
    },
    {
      $set: {
        variables: updatedVariables,
      },
    }
  );
  revalidateTag("alerts_variables");
}
export async function handleAlertsVariablesUnselect(variable: string) {
  const redeflex = mongodb_client.db("redeflex");
  const collection = redeflex.collection("alerts");
  const { variables }: { variables: VariablesInterfaces[] } =
    (await collection.findOne({
      _id: new ObjectId("66872ee8a47db2d310066cfb"),
    })) as any;
  const formmated_variables = variables.map((variableItem) => {
    return variableItem["label"] === variable
      ? { ...variableItem, value: !variableItem["value"] }
      : variableItem;
  });
  await collection.updateOne(
    {
      _id: new ObjectId("66872ee8a47db2d310066cfb"),
    },
    {
      $set: {
        variables: formmated_variables,
      },
    }
  );
  revalidateTag("alerts_variables");
}
export async function handleAlertsLogs(): Promise<AlertsInterfaces[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/mock-alerts`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
    }
  );
  const { data } = await response.json();
  return (
    data || [
      { date: "07-08-2024", variable_name: "marginGC", condition: "sanado" },
    ]
  );
}
export async function handleAlertsTable(): Promise<any> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/mock-name-station`,
    {
      cache: "no-cache",
      headers: apiRequestConfig(),
    }
  );
  const { data } = await response.json();
  const formmated_data = data.map((data_item: any) => {
    const formmated_item = {
      name: data_item.name,
      "Configurar alerta": "margin_min_value",
    };
    return formmated_item;
  });
  return formmated_data;
}

// function to return the variables and alerts values
function gettingVariablesAndAlerts(existentContent: any): {
  variables: VariablesInterfaces[];
  alerts: any;
} {
  const { variables, alerts } = existentContent;
  return { variables, alerts };
}

//function to return the updated variables and alerts values
function gettingUpdatedVariables(
  variables: VariablesInterfaces[],
  variable: FormDataEntryValue | null,
  whatsapp_contact: FormDataEntryValue | null,
  margin_min_value: FormDataEntryValue | null,
  margin_min_value_type: FormDataEntryValue | null
) {
  return variables.map((variablesItem) => {
    return variablesItem.label === variable
      ? {
          ...variablesItem,
          value: !variablesItem.value,
          whatsapp_contact,
          margin_min_value,
          margin_min_value_type,
        }
      : variablesItem;
  });
}
