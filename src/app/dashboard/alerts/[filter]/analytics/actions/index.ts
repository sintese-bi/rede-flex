"use server";
import { revalidateTag } from "next/cache";
import { VariablesInterfaces } from "../interfaces/variables";
import { AlertsInterfaces } from "../interfaces/alerts";
import { ObjectId } from "mongodb";
import { mongodb_client } from "@/database/connection";
import { apiRequestConfig, getUserUUID } from "@/utils";
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
    `${process.env.NEXT_PUBLIC_EXTERN_API}/name-table/station`,
    {
      method: "POST",
      cache: "no-cache",
      headers: apiRequestConfig(),
      body: JSON.stringify({
        use_uuid: "c72bfa11-3632-46f8-a935-4a832a1111c0",
      }),
    }
  );
  const { data } = await response.json();
  const formmated_data = data.map((data_item: any) => {
    const formmated_item = {
      name: data_item.name,
      gas_station_id: data_item.gas_station_id,
      "Configurar alerta": "margin_min_value",
    };
    return formmated_item;
  });
  return formmated_data;
}

export async function handleAlertsUpdate(
  form: FormData,
  ibm_id: string
): Promise<any> {
  const use_uuid = getUserUUID();
  const variable_name = form.get("variable");
  const variable_value = Number(form.get("margin_min_value"));
  const value_type = isMarginTypeValueAbsolute(
    form.get("margin_min_value_type") as string
  );
  const telephones: string[] = getTelephones(
    form.get("whatsapp_contact") as string
  );
  const body = {
    use_uuid,
    ibm_id,
    variable_name,
    value_type,
    variable_value,
    telephones,
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EXTERN_API}/update-alert/station`,
    {
      method: "POST",
      cache: "no-cache",
      headers: apiRequestConfig(),
      body: JSON.stringify(body),
    }
  );
  const json_response = await response.json();
  return json_response;
}

// function to return the telephones field
function getTelephones(telephones_string: string) {
  const telephones_formmated = telephones_string.replace(/[()]/g, "");
  const telephones_spplited = telephones_formmated.split(" ");
  const telephones: string[] = [];
  for (const item of telephones_spplited) {
    item.length != 0 ? telephones.push(item) : null;
  }
  return telephones;
}

// function to return false if the margin type value is absolute
function isMarginTypeValueAbsolute(type: string) {
  return type == "absolute" ? false : true;
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
