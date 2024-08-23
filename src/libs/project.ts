import { promises as fs } from "fs";
import path from "path";

export const loadProjects = async () => {
  try {
    // Get the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "src\\db\\projects.json");

    // Read the json data file db.json
    const fileContents = await fs.readFile(jsonDirectory, "utf8");

    // Parse the JSON data
    const project = JSON.parse(fileContents);
    return project.payload;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return {
      project: [], // Return empty project array or handle accordingly
    };
  }
};
