import { readFile } from "fs/promises";
const filePath = "database/dashboard.json";
export async function GET() {
  try {
    const response = await readFile(filePath, "utf-8");
    const { charts }: { charts: Array<any> } = JSON.parse(response);
    return Response.json(charts);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
    });
  }
}
