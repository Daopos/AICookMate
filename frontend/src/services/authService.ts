import type { SignupData } from "../types/Auth";

const authSignup = async (data: SignupData) => {
  const result = await fetch("http://localhost:3000/api/v1/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(errorData.message || "Login failed");
  }
  return result.json();
};

const authLogin = async (data: Omit<SignupData, "name">) => {
  const result = await fetch("http://localhost:3000/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(errorData.message || "Login failed");
  }

  return result.json();
};

export default { authSignup, authLogin };
