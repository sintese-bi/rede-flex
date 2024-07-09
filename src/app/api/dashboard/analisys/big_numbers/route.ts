import { BigNumbersInterfaces } from "@/app/dashboard/analytics/interfaces/big_numbers";
import { mongodb_client } from "@/database/connection";
import { ObjectId } from "mongodb";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const redeflex = mongodb_client.db("redeflex");
    const collection = redeflex.collection("analisys");
    const { big_numbers }: { big_numbers: BigNumbersInterfaces[] } =
      (await collection.findOne({
        _id: new ObjectId("66873e8ba47db2d310066cfc"),
      })) as any;
    const formmatedNumbers = big_numbers.map((big_number) => {
      return {
        ...big_number,
        value:
          typeof big_number["value"] == "number"
            ? new Intl.NumberFormat("de-DE").format(big_number["value"])
            : big_number["value"],
      };
    });
    return Response.json(formmatedNumbers);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
