import { ChartsInterfaces } from "@/app/dashboard/analytics/interfaces/charts";
import { mongodb_client } from "@/database/connection";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const redeflex = mongodb_client.db("redeflex");
    const collection = redeflex.collection("dashboard");
    const { charts }: { charts: ChartsInterfaces[] } =
      (await collection.findOne({
        _id: new ObjectId("668953f2e6120c73f62c0a9c"),
      })) as any;
    return Response.json(charts);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
