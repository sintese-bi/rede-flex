import { readFile } from "fs/promises";
const filePath = "database/alerts.json";
export async function GET() {
  try {
    const response = await readFile(filePath, "utf-8");
    const { variables } = JSON.parse(response);
    return Response.json(variables);
  } catch (error) {
    return Response.json({
      message: "Error when requesting alerts variables, try again later",
      error,
    });
  }
}
