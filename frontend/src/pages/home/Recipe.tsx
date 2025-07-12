import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useGemini } from "../../hooks/useGemini";

const Recipe = () => {
  const [input, SetInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetInput(event.currentTarget.value);
  };

  const { data, loading, postRecipe } = useGemini();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postRecipe({ prompt: input });

    console.log(data);
  };

  return (
    <div className="mt-5 d-flex flex-column align-items-center">
      <Form className="w-75 d-flex" onSubmit={handleSubmit}>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Ex. Avocado, Seaweed, Beef"
          name="prompt"
          value={input}
          onChange={handleChange}
        />
        <Button type="submit" className="w-25" disabled={loading}>
          Submit
        </Button>
      </Form>

      <div className="mt-3 w-75 bg-light rounded p-5">
        <div className="d-flex justify-content-between">
          <h1>Recipe:</h1>
          <Button>Saved</Button>
        </div>
        <hr className="mt-4" />
        <div>
          {loading ? (
            <p>loading</p>
          ) : (
            <pre style={{ wordBreak: "break-all", whiteSpace: "pre-wrap" }}>
              {data?.prompt}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};
export default Recipe;
