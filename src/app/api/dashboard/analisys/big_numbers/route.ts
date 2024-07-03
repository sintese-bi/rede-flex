import { BigNumbersInterfaces } from "@/app/dashboard/analisys/analytics/interfaces/big_numbers";
import { readFile } from "fs/promises";
const filePath = "analytics.json";
export async function GET() {
  try {
    const response: BigNumbersInterfaces[] = JSON.parse(
      await readFile(filePath, "utf-8")
    );
    const formmatedResponse = response.map(({ name, label, value }) => {
      return typeof value == "number"
        ? { name, label, value: new Intl.NumberFormat("de-DE").format(value) }
        : { label, name, value };
    });
    return Response.json(formmatedResponse);
  } catch (error) {
    return Response.json({
      message:
        "Error when requesting analytics big numbers values, try again later",
      error,
    });
  }
}
