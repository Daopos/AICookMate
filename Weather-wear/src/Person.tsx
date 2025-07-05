import { useState } from "react";

interface Props {
  name: string;
  age: number;
}

export const Person = () => {
  const [names, setName] = useState<string[]>([]);

  const [inputName, setInputName] = useState<string>("");

  const addName = () => {
    setName((prev) => [...prev, inputName]);
  };

  const deleteName = (i: number) => {
    setName((prev) => prev.filter((v, index) => index !== i));
  };

  return (
    <div>
      <div></div>

      <input type="text" onChange={(e) => setInputName(e.target.value)} />
      <button onClick={addName}>Show</button>
      {names.map((name, i) => (
        <div style={{ display: "flex", gap: 20 }}>
          <h1>{name}</h1>
          <h1>edit</h1>
          <h1 onClick={() => deleteName(i)}>delete</h1>
        </div>
      ))}
    </div>
  );
};
