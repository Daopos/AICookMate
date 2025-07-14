import { useEffect, useState } from "react";
import type { Recipes } from "../types/Recipe";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import recipeService from "../services/recipeService";

export const useRecipe = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    try {
      setLoading(true);

      const response = await recipeService.getRecipes(token!);
      setRecipes(response);
      setLoading(false);
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

  const deleteRecipeById = async (id: string) => {
    try {
      setDeleteLoading(true);

      await recipeService.deleteRecipeById(id);

      setRecipes((prev) => prev.filter((data) => data.id !== id));
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.log("error");
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    recipes,
    loading,
    error,
    getRecipes,
    deleteRecipeById,
    deleteLoading,
  };
};
