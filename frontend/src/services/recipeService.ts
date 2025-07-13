import type { saveRecipe } from "../types/Recipe";

const savedRecipe = async (data: saveRecipe, token: string) => {
  console.log(data);

  const response = await fetch("http://localhost:3000/api/v1/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  console.log("Response status:", response.status);
  console.log("Response ok:", response.ok);
  if (!response.ok) {
    throw new Error("Failed to save recipe");
  }
  const json = await response.json();
  console.log(json);
  return json;
};

export default {
  savedRecipe,
};
