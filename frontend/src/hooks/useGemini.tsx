import { useState } from "react";
import type { Gemini } from "../types/Gemini";
import geminiService from "../services/geminiService";

export const useGemini = () => {
  const [data, setData] = useState<Gemini | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const postRecipe = async (input: Gemini) => {
    setLoading(true);

    try {
      const response = await geminiService.geminiRecipe(input);
      setData(response);
      return response;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, postRecipe };
};
