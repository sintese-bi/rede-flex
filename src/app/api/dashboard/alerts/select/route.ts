import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { readFile } from "fs/promises";
const filePath = "database/alerts.json";

// request function responsable for select the variabled choosed
export async function POST(req: Request, res: Response) {
  try {
    console.log(await req.formData());

    //const seila = req.formData();
    //seila.then((data) => console.log(data));
    //const formData = await req.formData();
    //const variable = formData.get("variable");
    //const whatsapp_contact = formData.get("whatsapp_contact");
    //const margin_min_value = formData.get("margin_min_value");
    //const margin_min_value_type = formData.get("margin_min_value_type");
    //const existentContent = await readFile(filePath, "utf-8");
    //const { variables, alerts } = gettingVariablesAndAlerts(existentContent);
    //const updatedVariables = gettingUpdatedVariables(
    //  variables,
    //  variable,
    //  whatsapp_contact,
    //  margin_min_value,
    //  margin_min_value_type
    //);
    //await writeFile(
    //  filePath,
    //  JSON.stringify({ variables: updatedVariables, alerts: alerts }, null, 2)
    //);

    return Response.json({ messae: "success" });
  } catch (error) {
    throw new Error(String(error));
    return Response.json({ message: "Error updating alerts variables", error });
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
