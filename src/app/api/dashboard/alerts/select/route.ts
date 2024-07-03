import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { readFile, writeFile } from "fs/promises";
const filePath = "database/alerts.json";

// request function responsable for select the variabled choosed
export async function PUT(req: Request, res: Response) {
  try {
    const {
      variable,
      margin_min_value,
      margin_min_value_type,
      whatsapp_contact,
    } = await req.json();
    const existentContent = await readFile(filePath, "utf-8");
    const { variables, alerts } = gettingVariablesAndAlerts(existentContent);
    const updatedVariables = gettingUpdatedVariables(
      variables,
      variable,
      whatsapp_contact,
      margin_min_value,
      margin_min_value_type
    );
    await writeFile(
      filePath,
      JSON.stringify({ variables: updatedVariables, alerts: alerts }, null, 2)
    );
    return new Response("Success", {
      status: 200,
    });
  } catch (error) {
    return new Response("Error", {
      status: 400,
    });
  }
}

// function to return the variables and alerts values
function gettingVariablesAndAlerts(existentContent: string): {
  variables: VariablesInterfaces[];
  alerts: any;
} {
  const { variables, alerts } = JSON.parse(existentContent);
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
