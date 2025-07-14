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
  return json.recipes;
};

const getRecipeById = async (id: string): Promise<Recipes> => {
  const response = await fetch(`http://localhost:3000/api/v1/recipe/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to load a recipe");
  }

  const json = await response.json();

  return json.recipes;
};

const deleteRecipeById = async (id: string): Promise<void> => {
  const response = await fetch(`http://localhost:3000/api/v1/recipe/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("failed to load a recipe");
  }
};

export default {
  savedRecipe,
  getRecipes,
  getRecipeById,
};
