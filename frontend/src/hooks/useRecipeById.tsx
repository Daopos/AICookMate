import { useEffect, useState } from "react";
import type { Recipes } from "../types/Recipe";
import recipeService from "../services/recipeService";

export const useRecipeById = (id: string) => {
  const [recipe, setRecipe] = useState<Recipes | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    getRecipeById();
  }, []);

  const getRecipeById = async () => {
    try {
      setLoading(true);
      const response = await recipeService.getRecipeById(id);
      setRecipe(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.log("erro");
    } finally {
      setLoading(false);
    }
  };

  return { recipe, loading, error };
};
