export const loadProjects = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/project`);
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return {
        project: [], // Return empty project array or handle accordingly
      };
    }
    const project = await response.json();
    return project;
  } catch (error) {
    // Handle network errors or JSON parsing errors
    console.error("Fetch error:", error);
    return {
      project: [], // Return empty project array or handle accordingly
    };
  }
};
