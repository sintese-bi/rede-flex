import { BigNumbersInterfaces } from "@/app/dashboard/analytics/interfaces/big_numbers";
import { mongodb_client } from "@/database/connection";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const redeflex = mongodb_client.db("redeflex");
    const collection = redeflex.collection("dashboard");
    const { big_numbers }: { big_numbers: BigNumbersInterfaces[] } =
      (await collection.findOne({
        _id: new ObjectId("668953f2e6120c73f62c0a9c"),
      })) as any;
    const formmatedNumbers = big_numbers.map((big_number) => {
      return {
        ...big_number,
        value: new Intl.NumberFormat("de-DE").format(big_number["value"]),
        secondary_value: new Intl.NumberFormat("de-DE").format(
          big_number["secondary_value"]
        ),
      };
    });
    return Response.json(formmatedNumbers);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
