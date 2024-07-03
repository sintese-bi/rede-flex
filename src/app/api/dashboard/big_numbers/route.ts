import { BigNumbersInterfaces } from "@/app/dashboard/analytics/interfaces/big_numbers";
import { readFile } from "fs/promises";
const filePath = "database/dashboard.json";
export async function GET() {
  try {
    const response = await readFile(filePath, "utf-8");
    const { big_numbers }: { big_numbers: BigNumbersInterfaces[] } =
      JSON.parse(response);
    const formmatedResponse = big_numbers.map(
      ({ label, value, secondary_label, secondary_value }) => {
        return typeof value == "number"
          ? {
              label,
              secondary_label,
              secondary_value: new Intl.NumberFormat("de-DE").format(
                secondary_value
              ),
              value: new Intl.NumberFormat("de-DE").format(value),
            }
          : {
              label,
              secondary_label,
              secondary_value,
              value,
            };
      }
    );
    return Response.json(formmatedResponse);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
