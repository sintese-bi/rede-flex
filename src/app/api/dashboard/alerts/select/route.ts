import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { mongodb_client } from "@/database/connection";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
// request function responsable for select the variabled choosed
export async function PUT(req: Request, res: Response) {
  try {
    const redeflex = mongodb_client.db("redeflex");
    const collection = redeflex.collection("alerts");
    const {
      variable,
      margin_min_value,
      margin_min_value_type,
      whatsapp_contact,
    } = await req.json();
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
