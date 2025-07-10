import { useState } from "react";
import type { authSignup, User } from "../model/User";
import authService from "../services/AuthServie";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const signup = async (data: authSignup) => {
    try {
      setLoading(true);
      setError(null);
      const user = await authService.signup(data);
      setUser(user);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, user };
};
