import { useState } from "react";
import type { saveRecipe } from "../types/Recipe";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import recipeService from "../services/recipeService";

export const useSaveRecipe = () => {
  const [saveLoading, setLoading] = useState(false);
  const [recipeError, setError] = useState<string | null>(null);

  const token = useSelector((state: RootState) => state.auth.token);

  const saveRecipe = async (data: saveRecipe) => {
    try {
      setLoading(true);
      if (!token) {
        setError("No auth token found.");
        return;
      }
      await recipeService.savedRecipe(data, token);
    } catch (err: unknown) {
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
  return { saveRecipe, saveLoading, recipeError };
};
