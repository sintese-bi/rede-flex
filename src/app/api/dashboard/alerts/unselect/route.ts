import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { readFile, writeFile } from "fs/promises";
const filePath = "database/alerts.json";

// request function responsable for unselect the variabled choosed
export async function PUT(req: Request, res: Response) {
  try {
    const { variable } = await req.json();
    const existentContent = await readFile(filePath, "utf-8");
    const { variables, alerts } = gettingVariablesAndAlerts(existentContent);
    const updatedVariables = gettingUpdatedVariables(variables, variable);
    await writeFile(
      filePath,
      JSON.stringify({ variables: updatedVariables, alerts: alerts }, null, 2)
    );
    return Response.json({ updatedVariables });
  } catch (error) {
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
  variable: string
) {
  return variables.map((variablesItem) => {
    return variablesItem.label === variable
      ? {
          ...variablesItem,
          value: !variablesItem.value,
        }
      : variablesItem;
  });
}
