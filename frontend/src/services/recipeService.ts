import type { Recipes, saveRecipe } from "../types/Recipe";

const savedRecipe = async (data: saveRecipe, token: string) => {
  const response = await fetch("http://localhost:3000/api/v1/recipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to save recipe");
  }
  const json = await response.json();
  console.log(json);
  return json;
};

const getRecipes = async (token: string): Promise<Recipes[]> => {
  const response = await fetch("http://localhost:3000/api/v1/recipes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to save recipe");
  }
  const json = await response.json();
  return json;
};

export default {
  savedRecipe,
  getRecipes,
};
