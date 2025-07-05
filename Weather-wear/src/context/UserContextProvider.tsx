import { createContext, useState } from "react";

export interface User {
  name: string;
  age: number;
}

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
}

const contextInitialValues: UserContextType = {
  users: null,
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
};

export const UserContext = createContext<UserContextType>(contextInitialValues);

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[] | null>([]);

  const addUser = (user: User) => {
    setUsers((prev) => (prev ? [...prev, user] : [user]));
  };

  const updateUser = (id: string) => {};

  const deleteUser = (id: string) => {
    setUsers((prev) => prev?.filter((user) => user.name !== id) ?? null);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
