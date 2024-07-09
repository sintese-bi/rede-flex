import { AlertsInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/alerts";
import { VariablesInterfaces } from "@/app/dashboard/alerts/analytics/interfaces/variables";
import { mongodb_client } from "@/database/connection";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const redeflex = mongodb_client.db("redeflex");
    const collection = redeflex.collection("alerts");
    const { alerts }: { alerts: AlertsInterfaces[] } =
      (await collection.findOne({
        _id: new ObjectId("66872ee8a47db2d310066cfb"),
      })) as any;
    return Response.json(alerts);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
