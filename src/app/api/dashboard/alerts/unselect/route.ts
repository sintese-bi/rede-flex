import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { mongodb_client } from "@/database/connection";
import { readFile, writeFile } from "fs/promises";
import { ObjectId } from "mongodb";
const filePath = "database/alerts.json";
export const dynamic = "force-dynamic";
// request function responsable for unselect the variabled choosed
export async function PUT(req: Request, res: Response) {
  try {
    const { variable } = await req.json();
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
    return Response.json(variables);
  } catch (error) {
    return new Response(String(error), {
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
