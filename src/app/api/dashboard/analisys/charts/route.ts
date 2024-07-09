import { readFile } from "fs/promises";
const filePath = "database/analisys.json";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const response = await readFile(filePath, "utf-8");
    const { charts }: { charts: Array<any> } = JSON.parse(response);
    return Response.json(charts);
  } catch (error) {
    return new Response(String(error), {
      status: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }
}
