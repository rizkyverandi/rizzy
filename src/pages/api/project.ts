import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "src\\db\\projects.json");

    // Read the json data file db.json
    const fileContents = await fs.readFile(jsonDirectory, "utf8");

    // Parse the JSON data
    const data = JSON.parse(fileContents);

    // Return the content of projects.json
    res.status(200).json(data.payload);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
