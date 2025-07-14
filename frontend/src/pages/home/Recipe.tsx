import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useGemini } from "../../hooks/useGemini";
import { BookMarked } from "lucide-react";
import { useSaveRecipe } from "../../hooks/useSaveRecipe";
import type { saveRecipe } from "../../types/Recipe";

const Recipe = () => {
  const [input, SetInput] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetInput(event.currentTarget.value);
  };

  const { data, loading, postRecipe } = useGemini();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postRecipe({ prompt: input });
  };

  const { saveRecipe, saveLoading } = useSaveRecipe();

  const handleSave = () => {
    saveRecipe(data as saveRecipe);
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
          {loading ? (
            <Spinner animation="border" variant="secondary" />
          ) : (
            "Generate"
          )}
        </Button>
      </Form>
      <div className="mt-3 w-75 bg-light rounded p-5">
        <div className="d-flex justify-content-between">
          <h1>Recipe:</h1>
          <Button
            variant="outline-light"
            onClick={handleSave}
            disabled={saveLoading || !data}
          >
            {saveLoading ? (
              <Spinner animation="border" variant="secondary" />
            ) : (
              <BookMarked color="black" />
            )}
          </Button>
        </div>
        <hr className="mt-4" />
        <div>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </div>
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
