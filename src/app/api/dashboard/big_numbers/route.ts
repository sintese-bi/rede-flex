import { readFile } from "fs/promises";
const filePath = "big_numbers.json";
export async function GET() {
  try {
    const response = await readFile(filePath, "utf-8");
    return Response.json(JSON.parse(response));
  } catch (error) {
    return Response.json({
      message:
        "Error when requesting dashboard big numbers data, try again later",
      error,
    });
  }
}
