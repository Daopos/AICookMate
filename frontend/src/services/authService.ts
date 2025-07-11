import type { SignupData } from "../types/Auth";

const authSignup = async (data: SignupData) => {
  const result = await fetch("http://localhost:3000/api/v1/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result.json();
};

export default { authSignup };
