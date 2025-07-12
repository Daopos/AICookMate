import type { Gemini } from "../types/Gemini";

const geminiRecipe = async (data: Gemini): Promise<Gemini> => {
  const response = await fetch("http://localhost:3000/api/v1/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }
  return await response.json();
};

export default { geminiRecipe };
