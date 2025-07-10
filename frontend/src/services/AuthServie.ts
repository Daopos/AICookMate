import type { authSignup, User } from "../model/User";

const signup = async (data: authSignup): Promise<User> => {
  const res = await fetch("localhost/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Signup failed");
  }

  const result = await res.json();

  return result.user as User;
};

export default { signup };
